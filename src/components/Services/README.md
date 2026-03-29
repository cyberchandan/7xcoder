steps to add animations

1--> import :- import { motion } from "framer-motion";

2--> change old element to new

example
old -->
                <div>
                    <h4 className="welcome-home1">
                      Welcome to Visiomatix Media
                    </h4>
                  </div>

new -->
                <motion.div>
                    <h4 className="welcome-home1">
                      Welcome to Visiomatix Media
                    </h4>
                  </motion.div>

/***note add motion.

3--> add animation code in opening tag

ANIMATION CODE--->

FADE IN

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
>
  Content
</motion.div>

FADE UP

<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
>
  Content
</motion.div>

FADE DOWN

<motion.div
  initial={{ opacity: 0, y: -60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
>
  Content
</motion.div>

SLIDE FROM LEFT

<motion.div
   initial={{ opacity: 0, x: -120 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
>
  Content
</motion.div>

SLIDE FROM RIGHT

<motion.div
  initial={{ opacity: 0, x: 120 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
>
  Content
</motion.div>

ZOOM IN

<motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
>
  Content
</motion.div>

ZOOM OUT

<motion.div
  initial={{ opacity: 0, scale: 1.2 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
>
  Content
</motion.div>

ROTATE

<motion.div
  initial={{ opacity: 0, rotate: -45 }}
  whileInView={{ opacity: 1, rotate: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
>
  Content
</motion.div>

FLIP

<motion.div
  initial={{ opacity: 0, rotateY: 90 }}
  whileInView={{ opacity: 1, rotateY: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
>
  Content
</motion.div>

BOUNCE

<motion.div
  initial={{ y: -120 }}
  whileInView={{ y: 0 }}
  transition={{ type: "spring", stiffness: 200 }}
  viewport={{ once: false, amount: 0.3 }}
>
  Content
</motion.div>