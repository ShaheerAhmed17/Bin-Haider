import { motion, useViewportScroll, useTransform } from "framer-motion";

const Home = () => {
  const { scrollY } = useViewportScroll();

  // Elements slide by 40% of screen width for demonstration
  const leftBoxX = useTransform(scrollY, [0, 300], [0, -300]); 
  const rightTextX = useTransform(scrollY, [0, 300], [0, 300]);
  const bgScale = useTransform(scrollY, [0, 300], [1, 1.2]);

  return (
    <div>
      {/* First section */}
      <section className="relative w-full h-screen">
        {/* Background */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            scale: bgScale,
            backgroundImage: "url('/path-to-your-image.jpg')",
          }}
        />

        {/* Left colored box */}
        <motion.div
          className="absolute top-0 left-0 w-2/5 h-full bg-purple-500"
          style={{ x: leftBoxX }}
        >
          <motion.h1 className="text-6xl text-white p-10" style={{ x: leftBoxX }}>
            Your Title Here
          </motion.h1>
        </motion.div>

        {/* Top right text */}
        <motion.div
          className="absolute top-6 right-6 text-white text-3xl font-bold"
          style={{ x: rightTextX }}
        >
          Bin Haider
        </motion.div>
      </section>

      {/* Second section to allow scrolling */}
      <section className="h-screen bg-gray-200"></section>
    </div>
  );
};

export default Home;
