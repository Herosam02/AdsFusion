import { motion } from 'framer-motion';
import { Users, Award, Heart, Zap } from 'lucide-react';
import ThreeDSphere from '../components/ThreeDSphere';
import { Link } from 'react-router-dom';
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

const AboutPage = () => {
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
              About <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">AdsFusion</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
            >
              We're a team of AI and technology experts dedicated to helping businesses innovate and thrive in the digital age.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Founded in 2022, AdsFusion began with a simple mission: to make advanced AI technology accessible and actionable for businesses of all sizes. Our founders, a group of AI researchers and industry veterans, recognized that while AI was transforming industries, many companies struggled to implement it effectively.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We set out to bridge this gap by creating a tech hub that combines cutting-edge AI expertise with practical business applications. Since then, we've grown to serve clients across various industries, helping them leverage AI and technology to drive innovation, efficiency, and growth.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Today, AdsFusion stands at the forefront of the AI revolution, continuously exploring new technologies and methodologies to deliver exceptional value to our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <div className="absolute inset-0 from-primary-300/20 to-transparent dark:from-primary-800/20 rounded-full"></div>
              <img src="https://images.pexels.com/photos/6953671/pexels-photo-6953671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-light-100 dark:bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 dark:text-gray-300"
            >
              The principles that guide everything we do at AdsFusion.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10" />,
                title: 'Client-Focused',
                description: 'We prioritize our clients\' needs and goals, tailoring our solutions to deliver maximum value and impact for their businesses.'
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: 'Excellence',
                description: 'We commit to the highest standards of quality and performance in everything we do, from code to customer service.'
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: 'Integrity',
                description: 'We operate with transparency, honesty, and ethical principles, building trust with our clients and within our team.'
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: 'Innovation',
                description: 'We continuously explore new technologies and approaches to stay at the cutting edge and provide innovative solutions.'
              }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-800 p-8 rounded-lg shadow-glass text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-500 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 dark:text-gray-300"
            >
              Meet the experts behind AdsFusion's innovative AI and tech solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Johnson',
                role: 'CEO & AI Research Director',
                bio: 'With over 15 years of experience in AI and machine learning, Alex leads our strategic direction and research initiatives.',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
              },
              {
                name: 'Sarah Chen',
                role: 'CTO & Head of Engineering',
                bio: 'Sarah oversees our technical operations and development teams, ensuring the delivery of cutting-edge solutions.',
                image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
              },
              {
                name: 'Michael Rivera',
                role: 'Chief AI Solutions Architect',
                bio: 'Michael specializes in designing custom AI solutions that address complex business challenges across industries.',
                image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
              },
              // {
              //   name: 'Emily Taylor',
              //   role: 'Head of AI Advisory',
              //   bio: 'Emily guides clients through their AI transformation journey, with expertise in change management and implementation.',
              //   image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg'
              // },
              // {
              //   name: 'David Lee',
              //   role: 'Lead Software Consultant',
              //   bio: 'David brings extensive experience in software architecture and development to help clients build robust, scalable systems.',
              //   image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg'
              // },
              // {
              //   name: 'Lisa Wong',
              //   role: 'Head of Client Success',
              //   bio: 'Lisa ensures our clients achieve their goals through our services, fostering long-term partnerships and success.',
              //   image: 'https://images.pexels.com/photos/1181694/pexels-photo-1181694.jpeg'
              // }
            ].map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                className="bg-light-100 dark:bg-dark-700 rounded-lg overflow-hidden shadow-glass group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
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
              Join Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-8"
            >
              We're always looking for talented individuals passionate about AI and technology. Explore career opportunities with AdsFusion.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/careers">
                <Button
                  size="lg"
                  className="text-primary-600 hover:bg-primary-50"
                >
                  View Open Positions
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;