import { ISvgBaseProps, SvgBase } from "../SvgBase";

export const Discord = ({ fill, ...rest }: ISvgBaseProps) => {
  return (
    <SvgBase width="22" height="18" viewBox="0 0 22 18" {...rest} fill={fill}>
      <path
        d="M8.49219 0.679688L7.90625 0.75C7.90625 0.75 5.27832 1.03711 3.35938 2.57812H3.33594L3.3125 2.60156C2.88184 2.99707 2.69434 3.4834 2.39844 4.19531C2.10254 4.90723 1.78613 5.81543 1.50781 6.82031C0.951172 8.83301 0.5 11.2705 0.5 13.5V13.6875L0.59375 13.875C1.28809 15.0938 2.52148 15.8701 3.66406 16.4062C4.80664 16.9424 5.79395 17.2266 6.47656 17.25L6.92188 17.2734L7.15625 16.875L7.97656 15.4219C8.84668 15.6182 9.84863 15.75 11 15.75C12.1514 15.75 13.1533 15.6182 14.0234 15.4219L14.8438 16.875L15.0781 17.2734L15.5234 17.25C16.2061 17.2266 17.1934 16.9424 18.3359 16.4062C19.4785 15.8701 20.7119 15.0938 21.4062 13.875L21.5 13.6875V13.5C21.5 11.2705 21.0488 8.83301 20.4922 6.82031C20.2139 5.81543 19.8975 4.90723 19.6016 4.19531C19.3057 3.4834 19.1182 2.99707 18.6875 2.60156L18.6641 2.57812H18.6406C16.7217 1.03711 14.0938 0.75 14.0938 0.75L13.5078 0.679688L13.2969 1.21875C13.2969 1.21875 13.0801 1.7666 12.9453 2.39062C12.0957 2.27637 11.4014 2.25 11 2.25C10.5986 2.25 9.9043 2.27637 9.05469 2.39062C8.91992 1.7666 8.70312 1.21875 8.70312 1.21875L8.49219 0.679688ZM7.46094 2.39062C7.49316 2.49609 7.52539 2.58691 7.55469 2.67188C6.58496 2.91211 5.55078 3.27832 4.60156 3.86719L5.39844 5.13281C7.34375 3.92578 10.1387 3.75 11 3.75C11.8613 3.75 14.6562 3.92578 16.6016 5.13281L17.3984 3.86719C16.4492 3.27832 15.415 2.91211 14.4453 2.67188C14.4746 2.58691 14.5068 2.49609 14.5391 2.39062C15.2393 2.53125 16.5752 2.85352 17.6797 3.72656C17.6738 3.72949 17.9609 4.16309 18.2188 4.78125C18.4824 5.41699 18.7754 6.26367 19.0391 7.21875C19.5459 9.0498 19.9443 11.2793 19.9766 13.2422C19.5049 13.9629 18.6289 14.6133 17.7031 15.0469C16.8945 15.4248 16.2559 15.5625 15.875 15.6328L15.5 15C15.7227 14.918 15.9424 14.8271 16.1328 14.7422C17.2871 14.2354 17.9141 13.6875 17.9141 13.6875L16.9297 12.5625C16.9297 12.5625 16.5078 12.9492 15.5234 13.3828C14.5391 13.8164 13.0361 14.25 11 14.25C8.96387 14.25 7.46094 13.8164 6.47656 13.3828C5.49219 12.9492 5.07031 12.5625 5.07031 12.5625L4.08594 13.6875C4.08594 13.6875 4.71289 14.2354 5.86719 14.7422C6.05762 14.8271 6.27734 14.918 6.5 15L6.125 15.6328C5.74414 15.5625 5.10547 15.4248 4.29688 15.0469C3.37109 14.6133 2.49512 13.9629 2.02344 13.2422C2.05566 11.2793 2.4541 9.0498 2.96094 7.21875C3.22461 6.26367 3.51758 5.41699 3.78125 4.78125C4.03906 4.16309 4.32617 3.72949 4.32031 3.72656C5.4248 2.85352 6.76074 2.53125 7.46094 2.39062ZM8.375 7.5C7.79492 7.5 7.28223 7.83105 6.96875 8.25C6.65527 8.66895 6.5 9.18457 6.5 9.75C6.5 10.3154 6.65527 10.8311 6.96875 11.25C7.28223 11.6689 7.79492 12 8.375 12C8.95508 12 9.46777 11.6689 9.78125 11.25C10.0947 10.8311 10.25 10.3154 10.25 9.75C10.25 9.18457 10.0947 8.66895 9.78125 8.25C9.46777 7.83105 8.95508 7.5 8.375 7.5ZM13.625 7.5C13.0449 7.5 12.5322 7.83105 12.2188 8.25C11.9053 8.66895 11.75 9.18457 11.75 9.75C11.75 10.3154 11.9053 10.8311 12.2188 11.25C12.5322 11.6689 13.0449 12 13.625 12C14.2051 12 14.7178 11.6689 15.0312 11.25C15.3447 10.8311 15.5 10.3154 15.5 9.75C15.5 9.18457 15.3447 8.66895 15.0312 8.25C14.7178 7.83105 14.2051 7.5 13.625 7.5ZM8.375 9C8.41602 9 8.46875 9.01465 8.5625 9.14062C8.65625 9.2666 8.75 9.48633 8.75 9.75C8.75 10.0137 8.65625 10.2334 8.5625 10.3594C8.46875 10.4854 8.41602 10.5 8.375 10.5C8.33398 10.5 8.28125 10.4854 8.1875 10.3594C8.09375 10.2334 8 10.0137 8 9.75C8 9.48633 8.09375 9.2666 8.1875 9.14062C8.28125 9.01465 8.33398 9 8.375 9ZM13.625 9C13.666 9 13.7188 9.01465 13.8125 9.14062C13.9062 9.2666 14 9.48633 14 9.75C14 10.0137 13.9062 10.2334 13.8125 10.3594C13.7188 10.4854 13.666 10.5 13.625 10.5C13.584 10.5 13.5312 10.4854 13.4375 10.3594C13.3438 10.2334 13.25 10.0137 13.25 9.75C13.25 9.48633 13.3438 9.2666 13.4375 9.14062C13.5312 9.01465 13.584 9 13.625 9Z"
        fill={fill || "black"}
      />
    </SvgBase>
  );
};
