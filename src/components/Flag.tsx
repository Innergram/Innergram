import Flags from "country-flag-icons/react/3x2";

export default function Flag({ countryCode }: { countryCode: string }) {
  const FlagComponent = Flags[countryCode.toUpperCase() as keyof typeof Flags];

  return <FlagComponent />;
}
