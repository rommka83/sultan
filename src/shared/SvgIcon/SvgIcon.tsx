import React from 'react';

export interface ISvgProps {
  color?: string;
  type:
    | 'catalog'
    | 'search'
    | 'download'
    | 'navigation'
    | 'mail'
    | 'basket'
    | 'burger';
}

export function SvgIcon({ type, color = '#fff' }: ISvgProps) {
  switch (type) {
    case 'catalog':
      return (
        <svg viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z'
            stroke={color}
          />
          <path
            d='M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z'
            stroke={color}
          />
          <path
            d='M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z'
            stroke={color}
          />
          <path
            d='M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z'
            stroke={color}
          />
        </svg>
      );
    case 'search':
      return (
        <svg viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M16.5294 16.5294L13.0989 13.0928L16.5294 16.5294ZM15 8.5C15 10.2239 14.3152 11.8772 13.0962 13.0962C11.8772 14.3152 10.2239 15 8.5 15C6.77609 15 5.12279 14.3152 3.90381 13.0962C2.68482 11.8772 2 10.2239 2 8.5C2 6.77609 2.68482 5.12279 3.90381 3.90381C5.12279 2.68482 6.77609 2 8.5 2C10.2239 2 11.8772 2.68482 13.0962 3.90381C14.3152 5.12279 15 6.77609 15 8.5V8.5Z'
            stroke={color}
            strokeWidth='1.3'
            strokeLinecap='round'
          />
        </svg>
      );
    case 'download':
      return (
        <svg viewBox='0 0 18 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M13.958 6.375H11.1247V2.125H6.87467V6.375H4.04134L8.99967 12.0417L13.958 6.375ZM3.33301 13.4583H14.6663V14.875H3.33301V13.4583Z'
            fill={color}
          />
        </svg>
      );
    case 'navigation':
      return (
        <svg viewBox='0 0 16 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M8 9.8335C9.38071 9.8335 10.5 8.71421 10.5 7.3335C10.5 5.95278 9.38071 4.8335 8 4.8335C6.61929 4.8335 5.5 5.95278 5.5 7.3335C5.5 8.71421 6.61929 9.8335 8 9.8335Z'
            stroke='#3F4E65'
            strokeWidth='1.3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M7.99967 0.666748C6.23156 0.666748 4.53587 1.36913 3.28563 2.61937C2.03539 3.86961 1.33301 5.5653 1.33301 7.33342C1.33301 8.91008 1.66801 9.94175 2.58301 11.0834L7.99967 17.3334L13.4163 11.0834C14.3313 9.94175 14.6663 8.91008 14.6663 7.33342C14.6663 5.5653 13.964 3.86961 12.7137 2.61937C11.4635 1.36913 9.76778 0.666748 7.99967 0.666748V0.666748Z'
            stroke='#3F4E65'
            strokeWidth='1.3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'mail':
      return (
        <svg viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3.37533 0.333252H14.6253C15.3171 0.333207 15.9827 0.59788 16.4855 1.07298C16.9884 1.54808 17.2903 2.19758 17.3295 2.88825L17.3337 3.04158V10.9583C17.3337 11.65 17.069 12.3156 16.5939 12.8184C16.1188 13.3213 15.4693 13.6233 14.7787 13.6624L14.6253 13.6666H3.37533C2.68354 13.6666 2.01797 13.402 1.51513 12.9269C1.0123 12.4518 0.710324 11.8023 0.671159 11.1116L0.666992 10.9583V3.04158C0.666947 2.3498 0.931621 1.68423 1.40672 1.18139C1.88182 0.678558 2.53132 0.376584 3.22199 0.337419L3.37533 0.333252H14.6253H3.37533ZM16.0837 4.81075L9.29199 8.38575C9.21531 8.42626 9.13102 8.45037 9.04451 8.45654C8.958 8.46271 8.87115 8.4508 8.78949 8.42159L8.70949 8.38658L1.91699 4.81158V10.9583C1.91701 11.3242 2.05463 11.6768 2.30256 11.9461C2.55048 12.2153 2.89058 12.3815 3.25533 12.4116L3.37533 12.4166H14.6253C14.9915 12.4166 15.3442 12.2788 15.6134 12.0307C15.8827 11.7826 16.0487 11.4423 16.0787 11.0774L16.0837 10.9583V4.81075ZM14.6253 1.58325H3.37533C3.00933 1.58327 2.65673 1.72089 2.3875 1.96882C2.11827 2.21674 1.95211 2.55683 1.92199 2.92159L1.91699 3.04158V3.39908L9.00033 7.12659L16.0837 3.39825V3.04158C16.0836 2.67546 15.9459 2.32274 15.6978 2.0535C15.4497 1.78425 15.1094 1.61817 14.7445 1.58825L14.6253 1.58325Z'
            fill='#3F4E65'
          />
        </svg>
      );
    case 'basket':
      return (
        <svg viewBox='0 0 41 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M40.6514 5.78617C40.3916 5.42327 40.043 5.24182 39.6055 5.24182H11.7559L11 3.27403C10.8086 2.62887 10.5488 2.07779 10.2207 1.6208C9.89258 1.16381 9.54395 0.841232 9.1748 0.65306C8.80566 0.464888 8.48438 0.3372 8.21094 0.269996C7.9375 0.202792 7.66406 0.169189 7.39062 0.169189H1.77148C1.41602 0.169189 1.11523 0.290157 0.869141 0.532093C0.623047 0.774028 0.5 1.08317 0.5 1.45951C0.5 1.67457 0.554688 1.8829 0.664062 2.08451C0.773438 2.28612 0.930664 2.44069 1.13574 2.54822C1.34082 2.65575 1.55273 2.70951 1.77148 2.70951H7.39062C7.5 2.70951 7.60254 2.72295 7.69824 2.74983C7.79395 2.77672 7.92383 2.89096 8.08789 3.09258C8.25195 3.29419 8.38867 3.59661 8.49805 3.99983L14.3809 20.1531C14.4355 20.3144 14.5244 20.4689 14.6475 20.6168C14.7705 20.7646 14.9141 20.8789 15.0781 20.9595C15.2422 21.0402 15.4199 21.0805 15.6113 21.0805H33.3301C33.6035 21.0805 33.8564 20.9998 34.0889 20.8385C34.3213 20.6773 34.4785 20.4756 34.5605 20.2337L40.8359 6.97569C40.9727 6.54558 40.9111 6.14908 40.6514 5.78617ZM32.4277 18.4998H16.6367L12.4531 7.82246H37.7188L32.4277 18.4998ZM30.0625 22.4798C29.1602 22.4798 28.3877 22.7957 27.7451 23.4274C27.1025 24.0591 26.7812 24.8186 26.7812 25.7057C26.7812 26.5928 27.1025 27.3522 27.7451 27.9839C28.3877 28.6156 29.1602 28.9315 30.0625 28.9315C30.9648 28.9315 31.7373 28.6156 32.3799 27.9839C33.0225 27.3522 33.3438 26.5928 33.3438 25.7057C33.3438 24.8186 33.0225 24.0591 32.3799 23.4274C31.7373 22.7957 30.9648 22.4798 30.0625 22.4798ZM18.25 22.4798C17.6484 22.4798 17.0947 22.6277 16.5889 22.9234C16.083 23.2191 15.6865 23.6089 15.3994 24.0927C15.1123 24.5766 14.9688 25.1143 14.9688 25.7057C14.9688 26.5928 15.29 27.3522 15.9326 27.9839C16.5752 28.6156 17.3477 28.9315 18.25 28.9315C19.1523 28.9315 19.9248 28.6156 20.5674 27.9839C21.21 27.3522 21.5312 26.5928 21.5312 25.7057C21.5312 25.4906 21.5107 25.2755 21.4697 25.0605C21.4287 24.8454 21.3672 24.6438 21.2852 24.4557C21.2031 24.2675 21.1006 24.086 20.9775 23.9113C20.8545 23.7366 20.7178 23.5753 20.5674 23.4274C20.417 23.2796 20.2529 23.1452 20.0752 23.0242C19.8975 22.9032 19.7129 22.8024 19.5215 22.7218C19.3301 22.6411 19.125 22.5806 18.9062 22.5403C18.6875 22.5 18.4688 22.4798 18.25 22.4798Z'
            fill='#3F4E65'
          />
        </svg>
      );
    case 'burger':
      return (
        <svg viewBox='0 0 10 8' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0.799805 4.5999H9.1998V3.3999H0.799805V4.5999ZM0.799805 7.5999H9.1998V6.3999H0.799805V7.5999ZM0.799805 0.399902V1.5999H9.1998V0.399902H0.799805Z'
            fill={color}
          />
        </svg>
      );
    // case '':
    //   return (

    //   );
    // case '':
    //   return (

    //   );

    default:
      return null;
  }
}
