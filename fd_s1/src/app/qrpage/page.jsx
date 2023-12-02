"use client";

import AutoplayVideo from "./Video";
import Form from "./intrebari/Form";

export default function QrPage() {
  const video = "orbanReal.mp4";

  return (
    <>
      <section>
        <div className="h-screen bg-primary">
          <div className="h-1/3"></div>
          <AutoplayVideo videoSource={video} />
        </div>
      </section>
    </>
  );
}
