import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";

const Achievements = () => {
  return (
    <section
      role="achievements"
      className="achievements-section flex flex-col justify-center items-center gap-16 bg-[#6c3baa] text-[#f6f4ef] py-8"
    >
      <div className="h-full lg:w-[50%] w-[70%] m-auto lg:p-8 flex flex-col justify-center items-center gap-8">
        <h2 className="text-5xl lg:text-7xl text-center">The Proven Lexi Method</h2>
        <p className="text-xl text-center">
          Our language learning app has helped thousands of users achieve
          fluency in their target languages. With our proven Lexi method, you
          can expect to see significant improvements in your language skills in
          just a few weeks. Join our community and start your language learning
          journey today!
        </p>
      </div>
      <div className="lg:w-[75%] w-[95%] h-full flex flex-col sm:flex-row justify-around items-center align-middle gap-8 relative">
        <div className="h-full w-full flex justify-center items-center align-middle">
          <div className="h-full w-full flex flex-col justify-center items-center align-middle text-center gap-3" >
            <FaUserPlus className="h-8 w-8" />
            <h4 className="text-2xl font-semibold">5k+ Users</h4>
            <p>
              Over 5,000 users have successfully learned new languages using Lexi. Join our growing community and start your language learning journey today.
            </p>
          </div>
        </div>
        <div className="h-full w-full flex justify-center items-center align-middle">
          <div className="h-full w-full flex flex-col justify-center items-center align-middle text-center gap-3">
            <FaBook className="h-8 w-8" />
            <h4 className="text-2xl font-semibold">Interactive Learning</h4>
            <p>
              Experience a dynamic and engaging way to learn languages with our interactive lessons that adapt to your pace and style.
            </p>
          </div>
        </div>
        <div className="h-full w-full flex justify-center items-center align-middle">
          <div className="h-full w-full flex flex-col justify-center items-center align-middle text-center gap-3">
            <MdOutlineVerifiedUser className="h-8 w-8" />
            <h4 className="text-2xl font-semibold">Expert Endorsements</h4>
            <p>
              Lexi is endorsed by language educators and experts for its innovative approach to language learning, making it both effective and enjoyable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;