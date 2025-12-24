"use client";

import { useState } from "react";
import LayOuts from "../../components/common/Layouts";
import Container from "../../components/common/container";
import Button from "../../components/common/Buttons";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import {
  FaUsers,
  FaMapMarkerAlt,
  FaStar,
  FaFilter,
  FaSearch,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function ExploreFarmers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // Mock data - replace with actual API call
  const farmers = [
    {
      id: 1,
      name: "Adebayo Johnson",
      title: "Rice & Maize Specialist",
      location: "Lagos State",
      experience: "15 years",
      rating: 4.8,
      projects: 42,
      successRate: 95,
      verified: true,
      specialization: ["Rice & Grains", "Maize"],
      avatar: null,
    },
    {
      id: 2,
      name: "Chioma Okafor",
      title: "Organic Vegetable Farmer",
      location: "Enugu State",
      experience: "10 years",
      rating: 4.9,
      projects: 38,
      successRate: 98,
      verified: true,
      specialization: ["Vegetables", "Organic Farming"],
      avatar: null,
    },
    {
      id: 3,
      name: "Ibrahim Mohammed",
      title: "Livestock & Dairy Expert",
      location: "Kaduna State",
      experience: "20 years",
      rating: 4.7,
      projects: 56,
      successRate: 92,
      verified: true,
      specialization: ["Livestock", "Dairy"],
      avatar: null,
    },
    {
      id: 4,
      name: "Grace Eze",
      title: "Cassava Processing Specialist",
      location: "Benue State",
      experience: "12 years",
      rating: 4.6,
      projects: 34,
      successRate: 94,
      verified: true,
      specialization: ["Cassava & Tubers", "Processing"],
      avatar: null,
    },
    {
      id: 5,
      name: "Musa Abubakar",
      title: "Commercial Poultry Farmer",
      location: "Kano State",
      experience: "8 years",
      rating: 4.8,
      projects: 28,
      successRate: 96,
      verified: true,
      specialization: ["Poultry", "Commercial Farming"],
      avatar: null,
    },
    {
      id: 6,
      name: "Ngozi Okonkwo",
      title: "Fruit Orchard Manager",
      location: "Ogun State",
      experience: "14 years",
      rating: 4.9,
      projects: 45,
      successRate: 97,
      verified: true,
      specialization: ["Fruits", "Orchard Management"],
      avatar: null,
    },
  ];

  const specializations = [
    "All Specializations",
    "Rice & Grains",
    "Vegetables",
    "Livestock",
    "Poultry",
    "Cassava & Tubers",
    "Fruits",
    "Cash Crops",
    "Aquaculture",
  ];

  const locations = [
    "All Locations",
    "Lagos State",
    "Kaduna State",
    "Kano State",
    "Ogun State",
    "Enugu State",
    "Benue State",
  ];

  const filteredFarmers = farmers.filter((farmer) => {
    const matchesSearch =
      farmer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      farmer.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialization =
      !selectedSpecialization ||
      selectedSpecialization === "All Specializations" ||
      farmer.specialization.some((spec) =>
        spec.toLowerCase().includes(selectedSpecialization.toLowerCase())
      );
    const matchesLocation =
      !selectedLocation ||
      selectedLocation === "All Locations" ||
      farmer.location === selectedLocation;

    return matchesSearch && matchesSpecialization && matchesLocation;
  });

  return (
    <LayOuts>
      {/* Main Content with Sidebar */}
      <section className=" bg-[#F9FAFB]">
        <Container>
          <div className="flex gap-6 lg:flex-col">
            {/* Left Sidebar - Filters */}
            <aside className="w-80 lg:w-full flex-shrink-0">
              <div className="bg-white rounded-2xl border border-[#E4E7EC] p-6 sticky top-6 lg:static">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-poppinsBold text-[#282A03] flex items-center gap-2">
                    <FaFilter className="text-[#2D865B]" />
                    Filters
                  </h2>
                  {(selectedSpecialization &&
                    selectedSpecialization !== "All Specializations") ||
                  (selectedLocation && selectedLocation !== "All Locations") ||
                  searchQuery ? (
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedSpecialization("");
                        setSelectedLocation("");
                      }}
                      className="text-sm text-[#2D865B] hover:text-[#1a5238] font-poppinsSemiBold"
                    >
                      Clear all
                    </button>
                  ) : null}
                </div>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-poppinsSemiBold text-[#282A03] mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <FaSearch
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7C7C7C]"
                      size={14}
                    />
                    <input
                      type="text"
                      placeholder="Name or specialty..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-[#E4E7EC] rounded-xl font-poppinsRegular text-sm focus:outline-none focus:ring-2 focus:ring-[#2D865B] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Specialization Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-poppinsSemiBold text-[#282A03] mb-2">
                    Specialization
                  </label>
                  <div className="space-y-2">
                    {specializations.map((spec) => (
                      <label
                        key={spec}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F9FAFB] cursor-pointer transition-colors"
                      >
                        <input
                          type="radio"
                          name="specialization"
                          value={spec}
                          checked={
                            selectedSpecialization === spec ||
                            (!selectedSpecialization &&
                              spec === "All Specializations")
                          }
                          onChange={(e) =>
                            setSelectedSpecialization(e.target.value)
                          }
                          className="w-4 h-4 text-[#2D865B] focus:ring-[#2D865B] border-[#E4E7EC]"
                        />
                        <span className="text-sm font-poppinsRegular text-[#282A03]">
                          {spec}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-poppinsSemiBold text-[#282A03] mb-2">
                    Location
                  </label>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {locations.map((loc) => (
                      <label
                        key={loc}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F9FAFB] cursor-pointer transition-colors"
                      >
                        <input
                          type="radio"
                          name="location"
                          value={loc}
                          checked={
                            selectedLocation === loc ||
                            (!selectedLocation && loc === "All Locations")
                          }
                          onChange={(e) => setSelectedLocation(e.target.value)}
                          className="w-4 h-4 text-[#2D865B] focus:ring-[#2D865B] border-[#E4E7EC]"
                        />
                        <span className="text-sm font-poppinsRegular text-[#282A03] flex items-center gap-2">
                          {loc !== "All Locations" && (
                            <FaMapMarkerAlt
                              className="text-[#2D865B]"
                              size={12}
                            />
                          )}
                          {loc}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Active Filters Summary */}
                {(selectedSpecialization &&
                  selectedSpecialization !== "All Specializations") ||
                (selectedLocation && selectedLocation !== "All Locations") ||
                searchQuery ? (
                  <div className="pt-4 border-t border-[#E4E7EC]">
                    <p className="text-xs text-[#7C7C7C] font-poppinsSemiBold mb-2">
                      ACTIVE FILTERS
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {searchQuery && (
                        <span className="bg-[#EEFEF6] text-[#2D865B] px-2.5 py-1 rounded-full text-xs font-poppinsSemiBold flex items-center gap-1.5">
                          {searchQuery}
                          <button
                            onClick={() => setSearchQuery("")}
                            className="hover:text-[#1a5238]"
                          >
                            ×
                          </button>
                        </span>
                      )}
                      {selectedSpecialization &&
                        selectedSpecialization !== "All Specializations" && (
                          <span className="bg-[#EEFEF6] text-[#2D865B] px-2.5 py-1 rounded-full text-xs font-poppinsSemiBold flex items-center gap-1.5">
                            {selectedSpecialization}
                            <button
                              onClick={() => setSelectedSpecialization("")}
                              className="hover:text-[#1a5238]"
                            >
                              ×
                            </button>
                          </span>
                        )}
                      {selectedLocation &&
                        selectedLocation !== "All Locations" && (
                          <span className="bg-[#EEFEF6] text-[#2D865B] px-2.5 py-1 rounded-full text-xs font-poppinsSemiBold flex items-center gap-1.5">
                            {selectedLocation}
                            <button
                              onClick={() => setSelectedLocation("")}
                              className="hover:text-[#1a5238]"
                            >
                              ×
                            </button>
                          </span>
                        )}
                    </div>
                  </div>
                ) : null}
              </div>
            </aside>

            {/* Right Content - Farmers Grid */}
            <div className="flex-1 min-w-0">
              {/* Results Header */}
              <div className="mb-6 flex justify-between items-center flex-wrap gap-4">
                <div>
                  <p className="text-[#5F5F5F] font-poppinsRegular">
                    <span className="font-poppinsBold text-[#2D865B] text-2xl">
                      {filteredFarmers.length}
                    </span>
                    <span className="ml-2">
                      farmer{filteredFarmers.length !== 1 ? "s" : ""} found
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-sm text-[#7C7C7C]">
                    <FaStar className="text-yellow-400" />
                    <span className="font-poppinsSemiBold">4.8</span>
                    <span className="font-poppinsRegular">avg rating</span>
                  </div>
                  <div className="h-4 w-px bg-[#E4E7EC]"></div>
                  <div className="flex items-center gap-2 text-sm text-[#7C7C7C]">
                    <FaMapMarkerAlt className="text-[#2D865B]" />
                    <span className="font-poppinsSemiBold">36</span>
                    <span className="font-poppinsRegular">states</span>
                  </div>
                </div>
              </div>

              {filteredFarmers.length > 0 ? (
                <div className="grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-5">
                  {filteredFarmers.map((farmer) => (
                    <div
                      key={farmer.id}
                      className="bg-white rounded-xl overflow-hidden border border-[#E4E7EC] hover:shadow-lg hover:border-[#2D865B] transition-all group"
                    >
                      {/* Card Header */}
                      <div className="bg-gradient-to-br from-[#2D865B] to-[#51F4A6] h-20 relative">
                        <div className="absolute -bottom-8 left-4">
                          <div className="w-16 h-16 rounded-full bg-white border-4 border-white flex items-center justify-center shadow-lg">
                            <FaUsers size={24} className="text-[#2D865B]" />
                          </div>
                        </div>
                        {farmer.verified && (
                          <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                            <MdVerified size={14} className="text-blue-500" />
                          </div>
                        )}
                      </div>

                      {/* Card Body */}
                      <div className="pt-10 px-4 pb-4">
                        <div className="mb-2">
                          <h3 className="text-base font-poppinsBold text-[#282A03] mb-0.5 group-hover:text-[#2D865B] transition-colors line-clamp-1">
                            {farmer.name}
                          </h3>
                          <p className="text-xs text-[#5F5F5F] font-poppinsRegular line-clamp-1">
                            {farmer.title}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 text-[#7C7C7C] text-xs mb-3">
                          <FaMapMarkerAlt
                            className="text-[#2D865B]"
                            size={10}
                          />
                          <span className="font-poppinsRegular">
                            {farmer.location}
                          </span>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-2 mb-3 py-2 border-y border-[#E4E7EC]">
                          <div className="text-center">
                            <p className="text-base font-poppinsBold text-[#2D865B]">
                              {farmer.rating}
                            </p>
                            <p className="text-[10px] text-[#7C7C7C] font-poppinsRegular">
                              Rating
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-base font-poppinsBold text-[#2D865B]">
                              {farmer.projects}
                            </p>
                            <p className="text-[10px] text-[#7C7C7C] font-poppinsRegular">
                              Projects
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-base font-poppinsBold text-[#2D865B]">
                              {farmer.successRate}%
                            </p>
                            <p className="text-[10px] text-[#7C7C7C] font-poppinsRegular">
                              Success
                            </p>
                          </div>
                        </div>

                        {/* Specializations */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {farmer.specialization
                            .slice(0, 2)
                            .map((spec, idx) => (
                              <span
                                key={idx}
                                className="bg-[#EEFEF6] text-[#2D865B] px-2 py-0.5 rounded-full text-[10px] font-poppinsSemiBold"
                              >
                                {spec}
                              </span>
                            ))}
                          {farmer.specialization.length > 2 && (
                            <span className="bg-[#F9FAFB] text-[#7C7C7C] px-2 py-0.5 rounded-full text-[10px] font-poppinsSemiBold">
                              +{farmer.specialization.length - 2}
                            </span>
                          )}
                        </div>

                        <Link href={`/farmer-directory/${farmer.id}`}>
                          <Button className="w-full flex items-center justify-center gap-1.5 py-2 text-xs">
                            View Profile
                            <GoArrowRight size={14} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-2xl border border-[#E4E7EC]">
                  <div className="w-24 h-24 bg-[#EEFEF6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaUsers size={40} className="text-[#2D865B]" />
                  </div>
                  <h3 className="text-xl font-poppinsBold text-[#282A03] mb-2">
                    No farmers found
                  </h3>
                  <p className="text-[#5F5F5F] font-poppinsRegular mb-6">
                    Try adjusting your filters or search query
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedSpecialization("");
                      setSelectedLocation("");
                    }}
                    className="text-[#2D865B] font-poppinsSemiBold hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </LayOuts>
  );
}
