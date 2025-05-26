import Image from "next/image";
import { images } from "../data";

const CustomerReviewCard = () => {
  return (
    <div className="bg-white border border-[#F6F6F6] rounded-xl py-6 px-4 shadow">
      <div className="flex items-center gap-x-4 mb-3">
        <Image
          src="/assets/store-front/avatar.svg"
          alt="customer-review-card"
          width={53}
          height={53}
        />

        <div>
          <p className="text-sm text-[#5F5F5F] font-poppinsSemiBold mb-1">
            Jane Doe
          </p>
          <div className="flex gap-x-2">
            {images?.map((el, i) => (
              <Image src={el} width={24} height={24} alt="open" key={i} />
            ))}
          </div>
        </div>
      </div>

      <p className="text-xs text-[#7C7C7C] font-poppinsRegular mb-2">
        It was nice working with farmpady project. I strongly recommend them.
      </p>

      <p className="text-xs text-[#5F5F5F] font-poppinsSemiBold">
        Date- 2025-01-01
      </p>
    </div>
  );
};

export default CustomerReviewCard;
