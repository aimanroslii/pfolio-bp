"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { Button } from "@/components/ui/button";


export default function VideoIntro() {
    const [language, setLanguage] = useState<"EN" | "DE">("EN");

    const videos = {
        EN: "/videos/EN_2ND_720.mp4",
        DE: "/videos/DE_720.mp4",
    }

    return (
        <div className={`py-12 md:py-16 lg:py-20`}>
            <div className="container">
                <Card className="w-full mx-auto shadow-2xl rounded-2xl overflow-hidden bg-transparent
                    max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-5xl">
                    <div className="relative">
                        {/* Video */}
                        <video
                            key={language} // important for switching videos
                            className="w-full h-auto max-h-[500px] object-cover rounded-2xl"
                            controls
                            autoPlay={false}
                            poster={language === "EN" ? "/images/Thumbnail_EN.png" : "/images/Thumbnail_DE.png"}
                        >
                            <source src={videos[language]} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Language Buttons (top-right overlay) */}
                        <div className="absolute top-4 right-4 flex gap-2">
                            <Button
                                size="sm"
                                className="rounded-md px-3 py-1" // small rounded rectangle
                                variant={language === "EN" ? "default" : "outline"}
                                onClick={() => setLanguage("EN")}
                            >
                                EN
                            </Button>
                            <Button
                                size="sm"
                                className="rounded-md px-3 py-1" // small rounded rectangle
                                variant={language === "DE" ? "default" : "outline"}
                                onClick={() => setLanguage("DE")}
                            >
                                DE
                            </Button>
                        </div>

                        {/* Optional title overlay */}
                        {/* <div className="absolute top-4 left-4 text-white text-lg font-bold drop-shadow-md">
    </div> */}
                    </div>
                </Card>
            </div>
        </div>
    )
}