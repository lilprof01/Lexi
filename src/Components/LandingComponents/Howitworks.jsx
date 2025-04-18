import React from "react";
import Button from "./Button";
import secImage1 from "/mockup1.webp";
import secImage2 from "/guide.webp";
import secImage3 from "/community.webp";

const Howitworks = () => {
  return (
    // How it works section
    <section
      role="howitworks"
      className="howitworks-section flex flex-col justify-center items-center gap-8 lg:gap-20 p-8 lg:p-28"
    >
      <div className="h-[70vh] w-full flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="w-full flex flex-col justify-center align-middle gap-8">
          <h3 className="text-2xl font-semibold">PLAY</h3>
          <p className="text-xl">
            Our app offers interactive lessons that adapt to your learning pace. Engage with real-life scenarios and practice your language skills in a fun and immersive way. Play games, solve puzzles, and complete challenges to make learning enjoyable and effective.
          </p>
          <div className="flex justify-end">
            <Button />
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${secImage1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-full w-full rounded-2xl"
        >
        </div>
      </div>
      <div className="h-[70vh] w-full flex lg:flex-row flex-col-reverse justify-center items-center gap-10">
        <div
          style={{
            backgroundImage: `url(${secImage2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[70vh] w-full  rounded-2xl"
        ></div>
        <div className="w-full flex flex-col justify-center align-middle gap-8">
          <h3 className="text-2xl font-semibold">LEARN</h3>
          <p className="text-xl">
            Receive personalized guidance from our AI-powered tutor. Get feedback on your progress and tips on how to improve your language skills effectively. Our lessons are designed to help you understand and retain new concepts quickly.
          </p>
          <div className="flex justify-end">
            <Button />
          </div>
        </div>
      </div>
      <div className="h-[70vh] w-full flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="w-full flex flex-col justify-center align-middle gap-8">
          <h3 className="text-2xl font-semibold">MASTER LANGUAGES</h3>
          <p className="text-xl">
            Join a community of language learners and native speakers. Practice with others, share your experiences, and get support from people around the world. Master your target language through continuous practice and real-life conversations.
          </p>
          <div className="flex justify-end">
            <Button />
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${secImage3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[70vh] w-full  rounded-2xl"
        ></div>
      </div>
    </section>
  );
};

export default Howitworks;