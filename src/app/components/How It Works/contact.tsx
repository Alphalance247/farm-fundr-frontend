import Container from "../common/container";
import Button from "../common/Buttons";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

interface contactProp {
  bg: string;
  text: string;
  btnText: string;
  url?: string;
  textColor: string;
}

const Contact: React.FC<contactProp> = ({
  bg,
  text,
  btnText,
  url,
  textColor,
}) => {
  return (
    <section className={` ${bg}`}>
      <Container>
        <div className="text-center">
          <p className={`text-4xl font-aristoBold mb-6 ${textColor}`}>{text}</p>
          <Link href={url || "/"}>
            <Button
              size="medium"
              variant="tertiary"
              className="flex items-center gap-x-4 justify-center w-[535px] mx-auto "
            >
              <span>{btnText}</span>
              <span>
                <GoArrowRight size={24} className="text-black" />
              </span>
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
