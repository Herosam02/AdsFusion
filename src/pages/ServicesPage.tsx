import { motion } from 'framer-motion';
import { Bot, BrainCircuit, Code, Database, LineChart, ShieldCheck, CheckCircle } from 'lucide-react';
import ThreeDSphere from '../components/ThreeDSphere';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import image from './pexels-photo-8386440.webp';
import image1 from './photo-1694903110330-cc64b7e1d21d.avif';
import image2 from './pexels-photo-7551644.webp';
import image3 from './photo-1657727534685-36b09f84e193.avif';
import image4 from './pexels-photo-7658435.jpeg';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const ServicesPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50 dark:bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Our <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
            >
              Comprehensive AI and tech solutions customized for your business needs. From automation to consultancy, we've got you covered.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4">
          {/* AI Automation Service */}
          <div id="ai-automation" className="mb-24 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Bot className="w-4 h-4 mr-2" />
                  AI Automation
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  Intelligent Automation for Business Efficiency
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Streamline your operations and eliminate repetitive tasks with our AI-powered automation solutions. Improve efficiency, reduce errors, and allow your team to focus on high-value activities.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    'Workflow automation solutions',
                    'Document processing with AI',
                    'Intelligent customer service automation',
                    'Custom automation for industry-specific needs',
                    'Integration with existing systems and processes'
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeIn}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button variant="primary">Get Started with Automation</Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl">
                  {/* Optional gradient overlay with reduced opacity */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 opacity-30 pointer-events-none z-10"></div>

                  {/* Clear image without blend mode */}
                  <img
                    src={image}
                    alt="AI Automation"
                    className="w-full h-full object-cover"
                  />

                  {/* Bottom text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-20">
                    <h3 className="text-white text-xl font-bold">Workflow Automation</h3>
                    <p className="text-white/80">Increase productivity by up to 40%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* AI Agents Service */}
          <div id="ai-agents" className="mb-24 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative order-2"
              >
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl">
                  {/* White overlay with low opacity */}
                  <div className="absolute inset-0 bg-white opacity-30 z-10 pointer-events-none"></div>

                  {/* Image without blend mode to preserve natural color */}
                  <img
                    src={image1}
                    alt="AI Agents"
                    className="w-full h-full object-cover"
                  />

                  {/* Centered 3D sphere */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  </div>
                </div>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="inline-flex items-center bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <BrainCircuit className="w-4 h-4 mr-2" />
                  AI Agents
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  Intelligent Agents Working for You
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Our AI agents act as virtual team members, performing tasks, analyzing data, and providing insights. They learn your business processes and continuously improve over time.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    'Custom AI agents tailored to your business needs',
                    'Natural language processing capabilities',
                    'Continuous learning and improvement',
                    'Multi-channel integration (email, chat, voice)',
                    'Analytics and reporting dashboard'
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeIn}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button variant="primary">Deploy AI Agents</Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Software Consultancy Service */}
          <div id="software-consultancy" className="mb-24 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Code className="w-4 h-4 mr-2" />
                  Software Consultancy
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  Expert Technology Guidance
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Our team of experienced consultants provides strategic advice on software selection, architecture, development, and implementation to align with your business goals.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    'Technology stack evaluation and selection',
                    'Software architecture design',
                    'Development team augmentation',
                    'Legacy system modernization',
                    'Digital transformation strategy'
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeIn}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-secondary-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button variant="primary">Schedule Consultation</Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl">
                  {/* Light white overlay with slight opacity for a white effect */}
                  <div className="absolute inset-0 bg-white opacity-30 z-10 pointer-events-none"></div>

                  {/* Image without blend mode for natural display */}
                  <img
                    src={image2}
                    alt="Software Consultancy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

            </div>
          </div>

          {/* AI Solutions Service */}
          <div id="ai-solutions" className="mb-24 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl">

                  {/* Soft white overlay */}
                  <div className="absolute inset-0 bg-white opacity-30 z-10 pointer-events-none"></div>

                  {/* Clean image without blend mode or dark dimming */}
                  <img
                    src={image3}
                    alt="AI Solutions"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="inline-flex items-center bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Database className="w-4 h-4 mr-2" />
                  AI Solutions
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  Custom AI Solutions for Business Impact
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  We design and develop tailored AI solutions to address your specific business challenges and opportunities, delivering measurable results and competitive advantage.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    'Computer vision and image recognition',
                    'Natural language processing systems',
                    'Predictive analytics and forecasting',
                    'Recommendation engines',
                    'Custom machine learning models'
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeIn}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button variant="primary">Explore AI Solutions</Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* AI Advisory Service */}
          <div id="ai-advisory" className="scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <LineChart className="w-4 h-4 mr-2" />
                  AI Advisory
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  Strategic AI Implementation Guidance
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Our advisors help you navigate the complex AI landscape, identifying the right opportunities for your business and developing a roadmap for successful implementation.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    'AI readiness assessment',
                    'Strategic roadmap development',
                    'Use case identification and prioritization',
                    'ROI analysis and business case development',
                    'AI governance and ethics framework'
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeIn}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button variant="primary">Get AI Advisory</Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl">
                  {/* White overlay for light effect */}
                  <div className="absolute inset-0 bg-white opacity-30 z-10 pointer-events-none"></div>

                  {/* Image without blending or dark mode styling */}
                  <img
                    src={image4}
                    alt="AI Advisory"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 dark:bg-primary-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Ready to Transform Your Business with AI?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-8"
            >
              Contact us today to schedule a free consultation and discover how our services can drive innovation and growth for your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="text-primary-600 hover:bg-primary-50"
                >
                  Get Started Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;