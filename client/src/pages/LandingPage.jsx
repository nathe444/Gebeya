import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Truck, Shield, Heart, UserPlus, MessageCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [language, setLanguage] = useState('en');

  const text = {
    en: {
      hero: {
        title: 'Gebeya Market',
        subtitle: 'Your Gateway to Ethiopian Excellence',
        description: 'Discover authentic Ethiopian products that celebrate our rich cultural heritage and craftsmanship.',
        cta: 'Shop Now',
        register: 'Register'
      },
      sections: {
        categories: 'Shop by Category',
        featured: 'Featured Products',
        about: 'About Gebeya',
        testimonials: 'What Our Customers Say'
      }
    },
    am: {
      hero: {
        title: 'ገበያ ማርኬት',
        subtitle: 'የኢትዮጵያ ምርጥ ምርቶች',
        description: 'የባህላችንን ቅርስና የእደ ጥበብ ሙያችንን የሚያከብሩ እውነተኛ የኢትዮጵያ ምርቶችን ያግኙ።',
        cta: 'አሁኑኑ ይግዙ',
        register: 'ይመዝገቡ'
      },
      sections: {
        categories: 'በምድብ ይግዙ',
        featured: 'ምርጥ ምርቶች',
        about: 'ስለ ገበያ',
        testimonials: 'የደንበኞቻችን አስተያየት'
      }
    }
  };

  const categories = [
    { 
      name: 'Traditional', 
      amharicName: 'ባህላዊ', 
      count: 156, 
      image: '/bahl.jpg'
    },
    { 
      name: 'Fashion', 
      amharicName: 'ፋሽን', 
      count: 89, 
      image: 'fashion.jpg'
    },
    { 
      name: 'Jewelry', 
      amharicName: 'ጌጣጌጥ', 
      count: 124, 
      image: '/jewlery.jpg'
    },
    { 
      name: 'Electronics', 
      amharicName: 'Electronics', 
      count: 78, 
      image: '/electronics.jpg'
    }
  ];

  const features = [
    {
      icon: Heart,
      title: 'Local Artisan Support',
      amharicTitle: 'የአካባቢ ሙያተኞችን ድጋፍ',
      description: 'Empowering Ethiopian craftsmanship',
      amharicDescription: 'የኢትዮጵያ የእጅ ሥራ ሙያተኞችን ማ赳ሳት',
      details: [
        'Direct from makers',
        'Fair compensation',
        'Cultural preservation'
      ]
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      amharicTitle: 'ደህንነቱ የተጠበቀ ክፍያ',
      description: 'Multiple payment options',
      amharicDescription: 'የተለያዩ የክፍያ አማራጮች',
      details: [
        'TeleBirr',
        'CBE Birr',
        'Amole',
        'Credit/Debit Cards'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Customer Support',
      amharicTitle: 'የደንበኛ አገልግሎት',
      description: 'Dedicated customer care',
      amharicDescription: 'ተጠሪ የደንበኛ እንክብካቤ',
      details: [
        'Multilingual support',
        'Quick response',
        'Hassle-free returns'
      ]
    },
    {
      icon: Star,
      title: 'Quality Guarantee',
      amharicTitle: 'የጥራት ዋስትና',
      description: 'Premium product assurance',
      amharicDescription: 'የምርጥ ምርት ዋስትና',
      details: [
        'Handpicked items',
        'Authentic products',
        'Satisfaction guaranteed'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Abebe Kebede',
      role: 'Verified Buyer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      text: 'The quality of the traditional coffee set exceeded my expectations. Excellent service!',
      amharicText: 'የባህላዊ ቡና ማድረጊያው ጥራት ከምጠብቀው በላይ ነው። እጅግ በጣም ጥሩ አገልግሎት!'
    },
    {
      name: 'Sara Mohammed',
      role: 'Fashion Designer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      text: 'Found amazing traditional fabrics for my designs. Fast delivery and great communication.',
      amharicText: 'ለዲዛይኖቼ አስደናቂ ባህላዊ ጨርቆችን አገኘሁ። ፈጣን ማድረስ እና ጥሩ ግንኙነት።'
    },
    {
      name: 'Yohannes Tadesse',
      role: 'Small Business Owner',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      text: 'Gebeya has been a game-changer for my small business. The platform connects me with customers nationwide.',
      amharicText: 'ገበያ ለትንሽ ንግዴ ትልቅ ለውጥ አምጥቷል። ይህ ፕሌትፎርም በሀገር አቀፍ ደረጃ ከደንበኞች ጋር ያገናኘኛል።'
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
          className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200"
        >
          {language === 'en' ? 'አማርኛ' : 'English'}
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#006B3F]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 text-center relative z-10 text-white"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            {text[language].hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90">
            {text[language].hero.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center"
            >
              <Link
                to="/products"
                className="bg-[#FEDD00] text-[#006B3F] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FFE94A] transition-all flex items-center gap-2"
              >
                {text[language].hero.cta} <ShoppingCart className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center"
            >
              <Link
                to="/auth/register"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
              >
                {text[language].hero.register} <UserPlus className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              {text[language].sections.categories}
            </h2>
            <div className="w-24 h-1 bg-[#006B3F] mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-semibold mb-2">
                      {language === 'en' ? category.name : category.amharicName}
                    </h3>
                    <p className="text-white/80">{category.count} items</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 p-8 rounded-2xl bg-gray-50"
              >
                <div className="bg-[#006B3F] p-4 rounded-xl text-white">
                  <feature.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {language === 'en' ? feature.title : feature.amharicTitle}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en' ? feature.description : feature.amharicDescription}
                  </p>
                  <ul className="list-disc pl-4 mt-4">
                    {feature.details.map((detail, index) => (
                      <li key={index} className="text-gray-600">{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              {text[language].sections.testimonials}
            </h2>
            <div className="w-24 h-1 bg-[#006B3F] mx-auto"></div>
          </motion.div>
          <div className="flex justify-center space-x-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="w-96 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-[#006B3F]/20"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-gray-700 mb-4 h-24">
                  "{language === 'en' ? testimonial.text : testimonial.amharicText}"
                </p>
                <div className="flex items-center text-[#FEDD00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#006B3F] text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              {language === 'en' 
                ? 'Ready to Explore Ethiopian Craftsmanship?' 
                : 'የኢትዮጵያ እደ ጥበብን ለማወቅ ዝግጁ ነዎት?'}
            </h2>
            <p className="text-white/80 mb-8">
              {language === 'en'
                ? 'Join our community of artisans and customers celebrating Ethiopian culture.'
                : 'የኢትዮጵያን ባህል በሚያከብሩ የእደ ጥበብ ሙያተኞች እና ደንበኞች ማህበረሰብ ይቀላቀሉ።'}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <Link
                to="/products"
                className="bg-white text-[#006B3F] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
              >
                {language === 'en' ? 'Start Shopping' : 'መግዛት ይጀምሩ'}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;