import Image from "next/image"; // Adjust based on your setup
import { Testimonial } from "@/app/interfaces";
import styles from "./TestimonialCard.module.css";

interface TestimonialItemProps {
  testimonialData: Testimonial;
}

const TestimonialCard: React.FC<TestimonialItemProps> = ({
  testimonialData,
}) => {
  const { id, content, imageUrl, name, role } = testimonialData;

  return (
    <div
      key={id}
      className="card-shadow-drop-down-effect flex h-full flex-col gap-8 bg-body-bg-primary-light px-10 pb-10 pt-10"
    >
      <p className={`${styles.testimonialBodyText}`}>{content}</p>
      <div className="flex flex-row items-center gap-4">
        <div className="relative h-8 w-8 overflow-clip rounded-full lg:h-12 lg:w-12">
          <Image
            src={imageUrl}
            alt={`${name} image`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 96px"
          />
        </div>
        <div>
          <h2 className={`${styles.userNameText}`}>
            {name}
          </h2>
          <h3 className={`${styles.userRoleTexts}`}>{role}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
