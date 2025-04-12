import React from 'react';

const About = () => {
  return (
    // About section
    <section className="howitworks-section flex flex-col justify-center items-center gap-8 p-8 lg:px-64 lg:py-32 text-center">
      <h1 className='font-bold text-3xl'>About Lexi</h1>
      <p className='text-2xl'>
        Lexi is a revolutionary language learning app designed to help you achieve fluency in your target language. Our interactive lessons adapt to your learning pace, making it easier and more enjoyable to learn a new language. With Lexi, you can engage with real-life scenarios and practice your language skills in a fun and immersive way.
        <br /><br />
        Our app provides you with feedback on your progress and tips on how to improve your language skills effectively. Whether you're a beginner or an advanced learner, Lexi has the tools and resources to help you succeed without even breaking a sweat.
        <br /><br />
        Join our vibrant community of language learners. Practice with others, share your experiences, and get support from people around the world. With Lexi, you're not just learning a language; you're becoming part of a global community.
      </p>
    </section>
  );
};

export default About;