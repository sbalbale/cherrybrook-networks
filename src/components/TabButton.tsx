import React from "react";
import { motion } from "framer-motion";


const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }: { active: boolean, selectTab: () => void, children: React.ReactNode }) => {
  const buttonClasses = active ? "text-primary" : "text-border";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-foreground ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-background mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;