import Container from "../common/container";
import Button from "../common/Buttons";
import { GoArrowRight } from "react-icons/go";

const Contact = () => {
  return (
    <section className="bg-[#EEFEF6]">
      <Container>
        <div className="text-center">
          <p className="text-4xl font-aristoBold mb-6 text-[#5F5F5F]">
            Got any questions?
          </p>
          <Button
            size="medium"
            variant="tertiary"
            className="flex items-center gap-x-4 justify-center w-[535px] mx-auto "
          >
            <span>Meet team</span>
            <span>
              <GoArrowRight size={24} className="text-black" />
            </span>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
