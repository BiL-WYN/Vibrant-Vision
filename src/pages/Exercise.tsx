import NavBar from "../components/NavBar";
"use client";
import './Exercise.css';
import React, { useEffect, useRef, useState } from "react";

import {
    FaceLandmarker,
    FilesetResolver,
} from "@mediapipe/tasks-vision";
import type {
    Category
} from "@mediapipe/tasks-vision";

interface FaceBlendshapeResult {
    categories: Category[];
}

type RunningMode = "IMAGE" | "VIDEO";

const Exercise: React.FC = () => {
    const webcamRunningRef = useRef(false);

    const demosRef = useRef<HTMLDivElement>(null);
    const imageBlendShapesRef = useRef<HTMLUListElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [faceLandmarker, setFaceLandmarker] =
        useState<FaceLandmarker | null>(null);
    const [runningMode, setRunningMode] = useState<RunningMode>("IMAGE");
    const [_, setWebcamRunning] = useState(false);
    const [webcamBlendshapes, setWebcamBlendshapes] =
        useState<FaceBlendshapeResult[] | null>(null);

    const videoWidth = 480;
    const lastVideoTime = useRef(-1);

    useEffect(() => {
        let mounted = true;

        const init = async () => {
            const resolver = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
            );

            const landmarker = await FaceLandmarker.createFromOptions(resolver, {
                baseOptions: {
                    modelAssetPath:
                        "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
                    delegate: "GPU"
                },
                outputFaceBlendshapes: true,
                runningMode: "IMAGE",
                numFaces: 1
            });

            if (mounted) {
                setFaceLandmarker(landmarker);
                demosRef.current?.classList.remove("invisible");
            }
        };

        init();
        return () => {
            mounted = false;
            faceLandmarker?.close();
        };
    }, []);

    const enableWebcam = async () => {
        if (!faceLandmarker || !videoRef.current) return;

        if (webcamRunningRef.current) return;

        webcamRunningRef.current = !webcamRunningRef.current;
        setWebcamRunning(webcamRunningRef.current);

        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.addEventListener("loadeddata", predictWebcam);
    };

    const predictWebcam = async () => {
        if (!videoRef.current || !canvasRef.current || !faceLandmarker) {
            return;
        }

        if (runningMode === "IMAGE") {
            await faceLandmarker.setOptions({ runningMode: "VIDEO" });
            setRunningMode("VIDEO");
        }

        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d")!;
        const ratio = video.videoHeight / video.videoWidth;

        video.style.width = `${videoWidth}px`;
        video.style.height = `${videoWidth * ratio}px`;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        if (lastVideoTime.current !== video.currentTime) {
            lastVideoTime.current = video.currentTime;

            const result = faceLandmarker.detectForVideo(
                video,
                performance.now()
            );

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (result.faceBlendshapes) {
                setWebcamBlendshapes(
                    result.faceBlendshapes as FaceBlendshapeResult[]
                );
            }
            
        }

        if (webcamRunningRef.current) {
            requestAnimationFrame(predictWebcam);
        }
    };

    /* ------------------ Render ------------------ */
    return (
        <div className="fullpage">
            <NavBar />
            <h1 className="title">Face landmark detection using MediaPipe</h1>

            <section ref={demosRef} className="mainSection">
                <ul ref={imageBlendShapesRef} />

                <button onClick={enableWebcam} className="button">
                    {"Enable Webcam"}
                </button>

                <div className="webcamStuff">
                    <div style={{ position: "relative" }}>
                        <video ref={videoRef} autoPlay playsInline />
                        <canvas
                            ref={canvasRef}
                            style={{ position: "absolute", top: 0 }}
                        />
                    </div>

                    <ul>
                        {webcamBlendshapes?.[0]?.categories
                            .filter((shape) =>
                                shape.categoryName.startsWith("eye")
                            )
                            .map((shape) => (
                                <li key={shape.categoryName}>
                                    <strong className="categories">
                                        {shape.displayName || shape.categoryName}
                                    </strong>
                                    : {shape.score.toFixed(4)}
                                </li>
                            ))}
                    </ul>
                </div>

            </section>
        </div>

    );
};

export default Exercise;
