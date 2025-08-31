"use client";
import Image from "next/image";
import Container from "../common/container";
import HeadingTextWithSubHead from "../common/headingTextWithSubHead";
import Card from "../common/card";
import Button from "../common/Buttons";
import { GoArrowRight } from "react-icons/go";
import SlideInSection from "../common/slideInSection";
import Link from "next/link";
import { getFarmMarketPlaceListStore } from "@/stores/farm-marketplace/farmMarketPlace";
import { useEffect } from "react";

const FeaturedProject = () => {
  const { data, fetchFarmMarketPlaceList } = getFarmMarketPlaceListStore();

  useEffect(() => {
    fetchFarmMarketPlaceList();
  }, [fetchFarmMarketPlaceList]);
  const projects = data?.results?.data ?? [];

  return (
    <SlideInSection>
      <section className="relative bg-[#fcfcfc]">
        <div className="absolute bottom-0 z-[1]">
          <Image
            src="/assets/LandingPage/icons/position2.svg"
            width={200}
            height={400}
            alt="positionlogo"
          />
        </div>
        <Container>
          <HeadingTextWithSubHead
            iconImage="/icons/vector3.svg"
            width={646}
            height={40}
            heading={"Top Featured Farm Projects"}
            withSubHead={false}
            className="text-center mb-16 lg:mb-12"
          />
          <div className="grid grid-cols-3 gap-x-6 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-10 md:grid-cols-1 md:gap-y-8">
            {projects.slice(0, 3).map((project) => (
              <Card
                key={project.id}
                projectImage={
                  project.project_images?.find((img) => img.is_main)?.image ??
                  project.images?.[0]
                }
                projectName={project.name}
                projectFarm={project.farm_name}
                projectDescrip={project.short_description}
                projectLocation={project.project_location}
                projectROI={String(project.ROI)}
                btnText2="View Details"
                btnTextLink2={`/farm/${project.id}`}
              />
            ))}
          </div>

          <Link href={"/farm-marketplace"}>
            <Button
              size="medium"
              className="flex items-center gap-x-4 justify-center mt-20 text-center w-[535px] mx-auto relative z-10"
            >
              <span>Explore More and Invest Now</span>
              <span>
                <GoArrowRight size={24} className="text-white" />
              </span>
            </Button>
          </Link>
        </Container>
      </section>
    </SlideInSection>
  );
};

export default FeaturedProject;
