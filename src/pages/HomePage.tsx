import { motion } from 'framer-motion';
import { ArrowRight, Bot, Code, Database, LineChart, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeDSphere from '../components/ThreeDSphere';
import Button from '../components/common/Button';

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

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:py-40 bg-gradient-to-b from-light-100 to-light-200 dark:from-dark-800 dark:to-dark-900 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20 dark:opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">AI-Powered</span> Solutions <br />
                for Your Business
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
                Harness the power of AI for automation, analytics, and innovation. Transform your business with cutting-edge technology and expert consultancy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="primary"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                  onClick={() => { }}
                >
                  Explore Services
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => { }}
                >
                  Contact Us
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {['Google', 'Microsoft', 'Amazon', 'IBM'].map((partner, i) => (
                  <motion.div
                    key={partner}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="bg-white/50 dark:bg-dark-700/50 backdrop-blur-sm p-3 rounded-lg flex justify-center items-center"
                  >
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{partner}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex justify-center items-center rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 from-primary-300/20 to-transparent dark:from-primary-800/20 rounded-full"></div>
              <img
                src="https://images.pexels.com/photos/9488847/pexels-photo-9488847.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Our AI & Tech Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Comprehensive solutions to help businesses leverage AI and technology for growth and innovation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="w-10 h-10" />,
                title: 'AI Automation',
                description: 'Streamline processes and increase efficiency with intelligent automation solutions powered by AI.',
                link: '/services#ai-automation'
              },
              {
                icon: <LineChart className="w-10 h-10" />,
                title: 'AI Agents',
                description: 'Custom intelligent agents that work alongside your team to increase productivity and insights.',
                link: '/services#ai-agents'
              },
              {
                icon: <Code className="w-10 h-10" />,
                title: 'Software Consultancy',
                description: 'Expert guidance on software strategy, architecture, and implementation for your business needs.',
                link: '/services#software-consultancy'
              },
              {
                icon: <Database className="w-10 h-10" />,
                title: 'AI Solutions',
                description: 'Tailored AI solutions designed to address specific business challenges and opportunities.',
                link: '/services#ai-solutions'
              },
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: 'AI Advisory',
                description: 'Strategic advice on implementing AI within your organization for maximum impact and ROI.',
                link: '/services#ai-advisory'
              },
              {
                icon: <ThreeDSphere size="w-10 h-10" />,
                title: '3D Visualization',
                description: 'Stunning 3D visualizations and immersive experiences for your products and data.',
                link: '/services#visualization'
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                className="bg-light-100 dark:bg-dark-700 p-8 rounded-lg shadow-glass hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-primary-500 mb-5 group-hover:text-accent-500 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-5">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-accent-600 dark:hover:text-accent-400 font-medium"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-50 dark:bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white dark:bg-dark-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-3 p-8 md:p-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
                >
                  Ready to Transform Your Business?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-700 dark:text-gray-300 mb-8"
                >
                  Get in touch with our experts to discuss how our AI and tech services can help your business innovate and grow.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link to="/contact">
                    <Button size="lg" variant="primary">
                      Contact Us Today
                    </Button>
                  </Link>
                </motion.div>
              </div>
              <div className="md:col-span-2 bg-primary-500 dark:bg-primary-700 flex items-center justify-center p-8 md:p-0 relative">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ_6RdffA15NNcRi-uOKv49UP5fCHR-AGMgSN6fVjlz-KE7r3YY3RXeV4nUWK1" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;