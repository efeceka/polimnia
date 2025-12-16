import Icon from "./Icon";
import SocialIcon from "./SocialIcon";
import { SOCIAL_LINKS } from "./content";

const ICONS = {
  Instagram: (
    <>
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm8.4 2H7.8A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4Z" />
      <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      <path d="M17.5 6.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
    </>
  ),
  YouTube: (
    <>
      <path d="M21.7 7.1a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.6.5A3 3 0 0 0 2.3 7.1 31.8 31.8 0 0 0 1.8 12c0 1.6.2 3.3.5 4.9a3 3 0 0 0 2.1 2.1c2 .5 7.6.5 7.6.5s5.7 0 7.6-.5a3 3 0 0 0 2.1-2.1c.3-1.6.5-3.3.5-4.9 0-1.6-.2-3.3-.5-4.9ZM10.1 15V9l5.2 3-5.2 3Z" />
    </>
  ),
  "X (Twitter)": (
    <>
      <path d="M18.9 2H22l-6.8 7.7L23 22h-6.3l-5-7.2L5.4 22H2.2l7.3-8.3L1 2h6.4l4.5 6.5L18.9 2Zm-1.1 18h1.7L7.2 3.9H5.4L17.8 20Z" />
    </>
  ),
  Facebook: (
    <>
      <path d="M13.5 22v-8h2.7l.5-3h-3.2V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.3 0-1.4-.1-2.7-.1-2.7 0-4.6 1.6-4.6 4.6V11H7v3h2.7v8h3.8Z" />
    </>
  ),
};

export default function SocialLinks({
  itemClassName = "",
  iconClassName = "",
  className = "",
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {SOCIAL_LINKS.map((social) => (
        <SocialIcon
          key={social.label}
          href={social.href}
          label={social.label}
          className={itemClassName}
        >
          <Icon className={iconClassName}>{ICONS[social.label]}</Icon>
        </SocialIcon>
      ))}
    </div>
  );
}

