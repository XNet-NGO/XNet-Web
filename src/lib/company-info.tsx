import { Lightbulb, Users, ShieldCheck, Globe, HeartHandshake } from 'lucide-react';

export const mission = {
  title: "Our Mission",
  description: "To bridge the digital divide and empower communities through accessible and innovative AI solutions, ensuring that the benefits of artificial intelligence are available to all.",
};

export const nonprofit = {
  icon: <HeartHandshake className="w-16 h-16 text-primary mx-auto mb-6" />,
  title: "Our Commitment as a Nonprofit",
  description: "XNet is proud to operate as a nonprofit organization. This status is not just a legal designation; it's a fundamental part of our identity. It means every resource, every partnership, and every innovation is dedicated solely to our mission of bridging the digital divide. We reinvest all surplus into our programs, ensuring our work is driven by purpose, not profit. Our commitment is to the communities we serve, and our nonprofit structure allows us to focus exclusively on creating sustainable, accessible AI solutions for everyone.",
};

export const values = [
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Innovation",
    description: "Continuously pushing the boundaries of AI to create impactful solutions that solve real-world problems.",
    details: "Our dedicated research and development team explores cutting-edge AI techniques, including machine learning, natural language processing, and computer vision. We partner with academic institutions and industry leaders to stay at the forefront of technological advancement, transforming theoretical possibilities into practical applications that drive progress."
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Accessibility",
    description: "Making technology available and easy to use for everyone, regardless of technical background or ability.",
    details: "We design our products with a user-first philosophy, ensuring intuitive interfaces and comprehensive support. We are committed to meeting WCAG standards and providing resources like tutorials and workshops to empower users from all walks of life. Our goal is to lower the barrier to entry for powerful AI tools."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Community",
    description: "Fostering collaboration and connection to build a stronger, more equitable future together.",
    details: "We actively engage with nonprofits, local governments, and educational institutions to deploy AI for social good. Through hackathons, mentorship programs, and open-source contributions, we cultivate a vibrant ecosystem where knowledge is shared and collective action creates a lasting, positive impact on society."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Integrity",
    description: "Operating with transparency and a strong ethical foundation in all of our work and partnerships.",
    details: "We adhere to a strict code of ethics that governs our data handling, algorithm design, and business practices. Our AI ethics board regularly reviews our projects to ensure fairness, accountability, and transparency. We believe that building trust is as important as building technology."
  },
];
