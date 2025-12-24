"use client";

import { use } from "react";
import LayOuts from "../../components/common/Layouts";
import Container from "../../components/common/container";
import {
  FaUsers,
  FaStar,
  FaEnvelope,
  FaPhone,
  FaAward,
  FaShare,
  FaTractor,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function FarmerProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  // Mock data - replace with actual API call using id
  const farmer = {
    id: id,
    name: "Adebayo Johnson",
    title: "Rice & Maize Specialist",
    location: "Lagos State, Nigeria",
    verified: true,
    rating: 4.8,
    reviewCount: 124,
    projectCount: 42,
    successRate: 95,
    experience: "15 years",
    connections: 356,
    farmSize: "250 Hectares",
    joinedDate: "January 2019",
    social: {
      linkedin: "https://www.linkedin.com/in/adebayo-johnson",
      twitter: "https://x.com/adebayo_farmer",
      instagram: "https://instagram.com/adebayo_farms",
      website: "https://greenfields.ng",
    },
    company: {
      name: "Green Fields Agricultural Hub",
      logo: "/assets/farm-logo.png",
    },
    education: {
      school: "University of Agriculture, Abeokuta",
      degree: "BSc. Agricultural Science",
    },
    bio: "Experienced agricultural entrepreneur with over 15 years of expertise in rice and maize cultivation. Passionate about sustainable farming practices and helping fellow farmers achieve success. Successfully completed 42 projects with a 95% success rate, contributing to food security across Nigeria.",
    email: "adebayo.johnson@farmfundr.ng",
    phone: "+234 803 456 7890",
    specializations: [
      "Rice Cultivation",
      "Maize Farming",
      "Sustainable Agriculture",
      "Crop Management",
      "Farm Planning",
    ],
    certifications: [
      { name: "Organic Farming Certification", issuer: "IFOAM", year: "2021" },
      {
        name: "Sustainable Agriculture Practices",
        issuer: "FAO",
        year: "2020",
      },
      { name: "Advanced Crop Management", issuer: "NAERLS", year: "2019" },
    ],
    achievements: [
      { title: "Top Performing Farmer 2023", year: "2023" },
      { title: "Highest Yield Award 2022", year: "2022" },
      { title: "Innovation in Agriculture 2021", year: "2021" },
      { title: "Community Impact Award 2020", year: "2020" },
    ],
    projects: [
      {
        id: 1,
        title: "Rice Cultivation - 100 Hectares",
        status: "Completed",
        year: "2023",
        yield: "8 tons/hectare",
        location: "Lagos State",
        description:
          "Large-scale rice cultivation project using modern irrigation techniques",
      },
      {
        id: 2,
        title: "Maize Farming Initiative",
        status: "Completed",
        year: "2023",
        yield: "6.5 tons/hectare",
        location: "Ogun State",
        description: "Hybrid maize farming with organic fertilizers",
      },
      {
        id: 3,
        title: "Community Rice Project",
        status: "Ongoing",
        year: "2024",
        yield: "Projected 7.5 tons/hectare",
        location: "Lagos State",
        description: "Collaborative farming project with 20+ local farmers",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Chioma Okafor",
        rating: 5,
        date: "March 2024",
        comment:
          "Outstanding farmer with deep knowledge of rice cultivation. Helped me improve my yield by 40%. Highly recommended!",
      },
      {
        id: 2,
        author: "Ibrahim Mohammed",
        rating: 5,
        date: "February 2024",
        comment:
          "Professional and dedicated. His sustainable farming practices are truly impressive. Great mentor!",
      },
      {
        id: 3,
        author: "Grace Eze",
        rating: 4,
        date: "January 2024",
        comment:
          "Very knowledgeable about modern farming techniques. Always willing to share insights and help others succeed.",
      },
    ],
  };

  return (
    <LayOuts>
      {/* Profile Header - LinkedIn Style */}
      <section className="bg-[#F9FAFB] -mb-30">
        <Container>
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-6">
            {/* Left Column - Profile (2/3 width) */}
            <div className="col-span-2 lg:col-span-1">
              <div className="bg-white rounded-lg border border-[#E4E7EC] overflow-hidden">
                {/* Cover Image */}
                <div className="bg-gradient-to-br from-[#2D865B] to-[#1a5238] h-48 md:h-32 relative"></div>

                {/* Profile Content */}
                <div className="px-8 pb-6 relative">
                  <div className="flex justify-between items-start gap-6">
                    {/* Left Side - Avatar and Info */}
                    <div className="-mt-20">
                      <div className="w-40 h-40 md:w-32 md:h-32 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center mb-4">
                        <FaUsers size={80} className="text-[#2D865B]" />
                      </div>

                      {/* Name & Basic Info - Below Avatar, Left Aligned */}
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h1 className="text-2xl font-poppinsBold text-[#282A03]">
                            {farmer.name}
                          </h1>
                          {farmer.verified && (
                            <MdVerified size={20} className="text-blue-500" />
                          )}
                        </div>
                        <p className="text-base text-[#282A03] font-poppinsRegular mb-2">
                          {farmer.title}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-[#7C7C7C] mb-1">
                          <span className="font-poppinsRegular">
                            {farmer.location}
                          </span>
                        </div>
                        <p className="text-sm text-[#2D865B] font-poppinsSemiBold mb-4">
                          {farmer.connections} connections
                        </p>
                      </div>

                      {/* Action Buttons - Below Info, Left Aligned */}
                      <div className="flex gap-3 flex-wrap pb-4">
                        <button className="flex items-center gap-2 px-6 py-2 bg-[#2D865B] text-white rounded-full font-poppinsSemiBold hover:bg-[#1a5238] transition-all text-sm">
                          Open to
                        </button>
                        <button className="flex items-center gap-2 px-6 py-2 border-2 border-[#2D865B] text-[#2D865B] rounded-full font-poppinsSemiBold hover:bg-[#EEFEF6] transition-all text-sm">
                          Add profile section
                        </button>
                        {/* <button className="flex items-center gap-2 px-6 py-2 border-2 border-[#E4E7EC] text-[#282A03] rounded-full font-poppinsSemiBold hover:bg-[#F9FAFB] transition-all text-sm">
                        Resources
                      </button> */}
                      </div>
                    </div>

                    {/* Right Side - Company and Education */}
                    <div className="space-y-4 pt-20">
                      {/* Company */}
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded border border-[#E4E7EC] flex items-center justify-center bg-white flex-shrink-0">
                          <FaTractor className="text-[#2D865B]" size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-poppinsSemiBold text-[#282A03]">
                            {farmer.company.name}
                          </p>
                        </div>
                      </div>

                      {/* Education */}
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded border border-[#E4E7EC] flex items-center justify-center bg-white flex-shrink-0">
                          <FaAward className="text-[#2D865B]" size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-poppinsSemiBold text-[#282A03]">
                            {farmer.education.school}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Section */}
                  <div className="grid grid-cols-4 md:grid-cols-2 gap-4 pt-4 border-t border-[#E4E7EC]">
                    <div>
                      <p className="text-xs text-[#7C7C7C] font-poppinsRegular mb-1">
                        Projects
                      </p>
                      <p className="text-lg font-poppinsBold text-[#282A03]">
                        {farmer.projectCount}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#7C7C7C] font-poppinsRegular mb-1">
                        Success Rate
                      </p>
                      <p className="text-lg font-poppinsBold text-green-600">
                        {farmer.successRate}%
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#7C7C7C] font-poppinsRegular mb-1">
                        Rating
                      </p>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" size={14} />
                        <p className="text-lg font-poppinsBold text-[#282A03]">
                          {farmer.rating}
                        </p>
                        <span className="text-xs text-[#7C7C7C] font-poppinsRegular">
                          ({farmer.reviewCount})
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-[#7C7C7C] font-poppinsRegular mb-1">
                        Farm Size
                      </p>
                      <p className="text-lg font-poppinsBold text-[#282A03]">
                        {farmer.farmSize}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Social Network */}
              <div className="bg-white rounded-lg border border-[#E4E7EC] p-6">
                <h3 className="text-base font-poppinsBold text-[#282A03] mb-4">
                  Social Network
                </h3>
                <div className="flex flex-wrap gap-3">
                  {farmer.social.website && (
                    <a
                      href={farmer.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-full border border-[#E4E7EC] text-sm font-poppinsSemiBold text-[#282A03] hover:border-[#2D865B] hover:text-[#2D865B]"
                    >
                      Website
                    </a>
                  )}
                  {farmer.social.linkedin && (
                    <a
                      href={farmer.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-full border border-[#E4E7EC] text-sm font-poppinsSemiBold text-[#282A03] hover:border-[#2D865B] hover:text-[#2D865B]"
                    >
                      LinkedIn
                    </a>
                  )}
                  {farmer.social.twitter && (
                    <a
                      href={farmer.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-full border border-[#E4E7EC] text-sm font-poppinsSemiBold text-[#282A03] hover:border-[#2D865B] hover:text-[#2D865B]"
                    >
                      X (Twitter)
                    </a>
                  )}
                  {farmer.social.instagram && (
                    <a
                      href={farmer.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-full border border-[#E4E7EC] text-sm font-poppinsSemiBold text-[#282A03] hover:border-[#2D865B] hover:text-[#2D865B]"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Info (1/3 width) */}
            <div className="lg:col-span-1 space-y-2">
              {/* Contact Info */}
              <div className="bg-white rounded-lg border border-[#E4E7EC] p-6 lg:mt-0">
                <h3 className="text-base font-poppinsBold text-[#282A03] mb-4">
                  Contact Info
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-[#7C7C7C]" size={16} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#7C7C7C] font-poppinsRegular">
                        Email
                      </p>
                      <a
                        href={`mailto:${farmer.email}`}
                        className="text-sm font-poppinsRegular text-[#2D865B] hover:underline truncate block"
                      >
                        {farmer.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-[#7C7C7C]" size={16} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#7C7C7C] font-poppinsRegular">
                        Phone
                      </p>
                      <a
                        href={`tel:${farmer.phone}`}
                        className="text-sm font-poppinsRegular text-[#2D865B] hover:underline"
                      >
                        {farmer.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications - Directly below contact */}
              <div className="bg-white rounded-lg border border-[#E4E7EC] p-6">
                <h3 className="text-base font-poppinsBold text-[#282A03] mb-4">
                  Certifications
                </h3>
                <div className="space-y-3">
                  {farmer.certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="pb-3 border-b border-[#E4E7EC] last:border-0 last:pb-0"
                    >
                      <p className="font-poppinsSemiBold text-[#282A03] text-sm mb-1">
                        {cert.name}
                      </p>
                      <p className="text-xs text-[#7C7C7C] font-poppinsRegular">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-[#2D865B] font-poppinsSemiBold mt-1">
                        {cert.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-lg border border-[#E4E7EC] p-6">
                <h3 className="text-base font-poppinsBold text-[#282A03] mb-4">
                  Achievements
                </h3>
                <div className="space-y-3">
                  {farmer.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 pb-3 border-b border-[#E4E7EC] last:border-0 last:pb-0"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#EEFEF6] flex items-center justify-center flex-shrink-0">
                        <FaAward className="text-[#2D865B]" size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-poppinsSemiBold text-[#282A03] text-sm mb-1">
                          {achievement.title}
                        </p>
                        <p className="text-xs text-[#7C7C7C] font-poppinsRegular">
                          {achievement.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content - LinkedIn Style */}
      <section className="bg-[#F9FAFB]">
        <Container>
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-2">
            {/* Left Column - Main Content */}
            <div className="col-span-2 lg:col-span-1 space-y-2">
              {/* About Section */}
              <div className="bg-white rounded-lg border border-[#E4E7EC] p-6">
                <h2 className="text-xl font-poppinsBold text-[#282A03] mb-4">
                  About
                </h2>
                <p className="text-[#5F5F5F] font-poppinsRegular leading-relaxed">
                  {farmer.bio}
                </p>
              </div>

              {/* Specializations */}
              <div className="bg-white rounded-lg border border-[#E4E7EC] p-6">
                <h2 className="text-xl font-poppinsBold text-[#282A03] mb-4">
                  Areas of Expertise
                </h2>
                <div className="flex flex-wrap gap-2">
                  {farmer.specializations.map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#F9FAFB] border border-[#E4E7EC] text-[#282A03] rounded-full text-sm font-poppinsSemiBold hover:bg-[#EEFEF6] hover:border-[#2D865B] transition-all"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="bg-white rounded-lg border border-[#E4E7EC] p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-poppinsBold text-[#282A03]">
                    Projects
                  </h2>
                  <span className="text-sm text-[#7C7C7C] font-poppinsRegular">
                    {farmer.projects.length} total
                  </span>
                </div>
                <div className="space-y-4">
                  {farmer.projects.map((project) => (
                    <div
                      key={project.id}
                      className="border-b border-[#E4E7EC] pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base font-poppinsBold text-[#282A03]">
                          {project.title}
                        </h3>
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-poppinsSemiBold flex-shrink-0 ${
                            project.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="text-sm text-[#5F5F5F] font-poppinsRegular mb-3">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-[#7C7C7C] flex-wrap">
                        <span className="font-poppinsRegular">
                          {project.year}
                        </span>
                        <span>•</span>
                        <span className="font-poppinsSemiBold text-green-600">
                          {project.yield}
                        </span>
                        <span>•</span>
                        <span className="font-poppinsRegular">
                          {project.location}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-lg border border-[#E4E7EC] p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-poppinsBold text-[#282A03]">
                    Reviews
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-poppinsBold text-[#282A03]">
                      {farmer.rating}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < Math.floor(farmer.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                          size={14}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-[#7C7C7C] font-poppinsRegular">
                      ({farmer.reviewCount})
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  {farmer.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-[#E4E7EC] pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#EEFEF6] flex items-center justify-center">
                            <FaUsers size={16} className="text-[#2D865B]" />
                          </div>
                          <div>
                            <p className="font-poppinsSemiBold text-[#282A03] text-sm">
                              {review.author}
                            </p>
                            <p className="text-xs text-[#7C7C7C] font-poppinsRegular">
                              {review.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={
                                i < review.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }
                              size={12}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-[#5F5F5F] font-poppinsRegular leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white border-t border-[#E4E7EC]">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-poppinsBold text-[#282A03] mb-3">
              Interested in connecting with {farmer.name.split(" ")[0]}?
            </h2>
            <p className="text-base text-[#5F5F5F] font-poppinsRegular mb-6">
              Reach out to discuss collaboration opportunities, investment, or
              farming expertise.
            </p>
            <div className="flex gap-3 justify-center">
              <button className="flex items-center gap-2 px-6 py-3 bg-[#2D865B] text-white rounded-full font-poppinsSemiBold hover:bg-[#1a5238] transition-all">
                <FaEnvelope size={16} />
                Send Message
              </button>
              <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#E4E7EC] text-[#282A03] rounded-full font-poppinsSemiBold hover:border-[#2D865B] hover:text-[#2D865B] transition-all">
                <FaShare size={16} />
                Share Profile
              </button>
            </div>
          </div>
        </Container>
      </section>
    </LayOuts>
  );
}
