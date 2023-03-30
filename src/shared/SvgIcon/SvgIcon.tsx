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
    | 'burger'
    | 'arrowLeft'
    | 'arrovBottom'
    | 'bottle'
    | 'boxOpen'
    | 'WA'
    | 'TG'
    | 'Visa'
    | 'MCard'
    | 'share'
    | 'delet';
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
            fill={color}
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
    case 'arrowLeft':
      return (
        <svg viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M5 1L1 5L5 9' stroke={color} />
        </svg>
      );
    case 'arrovBottom':
      return (
        <svg viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M1 1L5 5L9 1' stroke='#3F4E65' />
        </svg>
      );
    case 'bottle':
      return (
        <svg viewBox='0 0 9 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g opacity='0.23'>
            <path
              d='M8.1 14.0625C8.05312 14.3164 7.95234 14.5361 7.79766 14.7217C7.64297 14.9072 7.44375 15 7.2 15H1.8C1.55625 15 1.35938 14.9097 1.20938 14.729C1.05937 14.5483 0.95625 14.3262 0.9 14.0625L0 8.4375V6.5625C0 6.2793 0.0914062 6.04492 0.274219 5.85938C0.457031 5.67383 0.726562 5.49072 1.08281 5.31006C1.43906 5.12939 1.65937 5.00977 1.74375 4.95117C2.11875 4.67773 2.45625 4.35547 2.75625 3.98438C3.05625 3.61328 3.27656 3.22266 3.41719 2.8125H3.15C3.02812 2.8125 2.92266 2.76611 2.83359 2.67334C2.74453 2.58057 2.7 2.4707 2.7 2.34375V0.46875C2.7 0.341797 2.74453 0.231934 2.83359 0.13916C2.92266 0.0463867 3.02812 0 3.15 0H5.85C5.97187 0 6.07734 0.0463867 6.16641 0.13916C6.25547 0.231934 6.3 0.341797 6.3 0.46875V2.34375C6.3 2.4707 6.25547 2.58057 6.16641 2.67334C6.07734 2.76611 5.97187 2.8125 5.85 2.8125H5.58281C5.86406 3.60352 6.38437 4.28711 7.14375 4.86328C7.24687 4.95117 7.48125 5.08789 7.84687 5.27344C8.2125 5.45898 8.49609 5.64941 8.69766 5.84473C8.89922 6.04004 9 6.2793 9 6.5625V8.4375L8.1 14.0625Z'
              fill='#3F4E65'
            />
          </g>
        </svg>
      );
    case 'boxOpen':
      return (
        <svg viewBox='0 0 20 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            opacity='0.23'
            d='M13.3035 7.99994C12.7753 7.99994 12.2785 7.71869 12.0097 7.26869L10.0003 3.93743L7.9941 7.26869C7.72222 7.72181 7.22535 8.00306 6.69722 8.00306C6.5566 8.00306 6.41597 7.98431 6.2816 7.94369L2.00035 6.71868V12.2812C2.00035 12.7406 2.31285 13.1406 2.7566 13.2499L9.51285 14.9406C9.8316 15.0187 10.166 15.0187 10.4816 14.9406L17.2441 13.2499C17.6878 13.1374 18.0003 12.7374 18.0003 12.2812V6.71868L13.7191 7.94056C13.5847 7.98119 13.4441 7.99994 13.3035 7.99994ZM19.9472 4.49369L18.3378 1.28118C18.241 1.08743 18.0316 0.974934 17.816 1.00306L10.0003 1.99993L12.866 6.75306C12.9847 6.94993 13.2222 7.04368 13.4441 6.98118L19.6285 5.21556C19.9378 5.12493 20.0878 4.78118 19.9472 4.49369ZM1.66285 1.28118L0.0534711 4.49369C-0.0902789 4.78118 0.0628461 5.12493 0.369096 5.21243L6.55347 6.97806C6.77535 7.04056 7.01285 6.94681 7.1316 6.74993L10.0003 1.99993L2.1816 1.00306C1.96597 0.978059 1.75972 1.08743 1.66285 1.28118Z'
            fill='#3F4E65'
          />
        </svg>
      );
    case 'WA':
      return (
        <svg viewBox='0 0 39 39' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect width='39' height='39' rx='19.5' fill='#00E676' />
          <path
            d='M27.6784 11.3568C25.5476 9.18112 22.6022 8 19.594 8C13.2017 8 8.06271 13.1594 8.12533 19.4378C8.12533 21.427 8.68936 23.3541 9.62947 25.0946L8 31L14.079 29.4459C15.7711 30.3784 17.6511 30.8136 19.5314 30.8136C25.861 30.8136 31 25.654 31 19.3758C31 16.3298 29.8092 13.4703 27.6785 11.3568H27.6784ZM19.594 28.8866C17.9019 28.8866 16.2098 28.4515 14.7684 27.5812L14.3924 27.3947L10.7575 28.3271L11.6976 24.7839L11.4469 24.4109C8.68936 19.9974 10.0055 14.154 14.5177 11.4189C19.0299 8.68377 24.8583 9.98921 27.6158 14.4649C30.3733 18.9405 29.0572 24.7216 24.545 27.4568C23.1035 28.3892 21.3488 28.8865 19.594 28.8865V28.8866ZM25.1089 21.9866L24.4196 21.6758C24.4196 21.6758 23.4169 21.2407 22.7902 20.9298C22.7275 20.9298 22.6649 20.8676 22.6022 20.8676C22.4141 20.8676 22.2888 20.9298 22.1635 20.992C22.1635 20.992 22.1008 21.0541 21.2234 22.0488C21.1607 22.1731 21.0354 22.2353 20.9101 22.2353H20.8474C20.7847 22.2353 20.6594 22.1731 20.5967 22.111L20.2833 21.9866C19.594 21.6758 18.9673 21.3028 18.4659 20.8055C18.3406 20.6812 18.1525 20.5569 18.0272 20.4326C17.5885 19.9974 17.1498 19.5001 16.8365 18.9406L16.7738 18.8163C16.7112 18.7541 16.7112 18.692 16.6485 18.5677C16.6485 18.4434 16.6485 18.3191 16.7112 18.2569C16.7112 18.2569 16.9619 17.946 17.1498 17.7596C17.2752 17.6352 17.3379 17.4488 17.4632 17.3245C17.5885 17.1379 17.6512 16.8893 17.5885 16.7028C17.5259 16.392 16.7738 14.7136 16.5859 14.3406C16.4605 14.1541 16.3352 14.092 16.1472 14.0298H15.4578C15.3324 14.0298 15.2072 14.092 15.0817 14.092L15.019 14.1541C14.8937 14.2163 14.7684 14.3406 14.643 14.4028C14.5177 14.5272 14.455 14.6514 14.3297 14.7758C13.891 15.3353 13.6403 16.019 13.6403 16.7028C13.6403 17.2001 13.7656 17.6974 13.9537 18.1325L14.0164 18.3191C14.5804 19.5001 15.3324 20.5569 16.3352 21.4893L16.5859 21.7379C16.7738 21.9244 16.9619 22.0488 17.0872 22.2352C18.4033 23.3542 19.9073 24.1623 21.5994 24.5974C21.7875 24.6595 22.0381 24.6595 22.2262 24.7217H22.8528C23.1662 24.7217 23.5422 24.5974 23.7929 24.4731C23.9809 24.3488 24.1062 24.3488 24.2315 24.2245L24.357 24.1001C24.4823 23.9758 24.6076 23.9136 24.733 23.7893C24.8583 23.665 24.9836 23.5407 25.0463 23.4163C25.1717 23.1677 25.2343 22.8568 25.297 22.5461V22.111C25.297 22.111 25.2343 22.0488 25.1089 21.9866Z'
            fill='white'
          />
        </svg>
      );
    case 'TG':
      return (
        <svg viewBox='0 0 39 39' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g>
            <path
              d='M19.5 0C8.73036 0 0 8.73036 0 19.5C0 30.2696 8.73036 39 19.5 39C30.2696 39 39 30.2696 39 19.5C39 8.73036 30.2696 0 19.5 0Z'
              fill='#40B3E0'
            />
            <path
              d='M28.9884 11.2169L25.5054 28.7774C25.5054 28.7774 25.0183 29.9953 23.6788 29.4107L15.6414 23.2487L12.7188 21.8362L7.79905 20.1799C7.79905 20.1799 7.04404 19.9121 6.97091 19.3275C6.89779 18.743 7.82343 18.4264 7.82343 18.4264L27.3807 10.7544C27.3807 10.7544 28.9882 10.0481 28.9882 11.2172'
              fill='white'
            />
            <path
              d='M15.0237 28.5799C15.0237 28.5799 14.7891 28.558 14.4966 27.6324C14.2046 26.7069 12.7188 21.8358 12.7188 21.8358L24.5312 14.3344C24.5312 14.3344 25.2132 13.9204 25.1888 14.3344C25.1888 14.3344 25.3106 14.4075 24.9451 14.7485C24.5799 15.0896 15.6658 23.1024 15.6658 23.1024'
              fill='#D2E5F1'
            />
            <path
              d='M18.7228 25.6112L15.5438 28.5097C15.5438 28.5097 15.2952 28.6983 15.0234 28.5801L15.6322 23.1963'
              fill='#B5CFE4'
            />
          </g>
          <defs>
            <clipPath id='clip0_3074_387'>
              <rect width='39' height='39' fill='white' />
            </clipPath>
          </defs>
        </svg>
      );
    case 'Visa':
      return (
        <svg viewBox='0 0 61 39' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g>
            <rect width='60.9375' height='39' rx='3' fill='#00579F' />
            <path
              d='M27.3815 26.6927H23.6299L25.9764 13.2432H29.7279L27.3815 26.6927Z'
              fill='white'
            />
            <path
              d='M40.9814 13.5726C40.2414 13.3005 39.0678 13 37.6165 13C33.9116 13 31.3027 14.8313 31.2867 17.4496C31.2559 19.3813 33.1546 20.4542 34.5747 21.0983C36.0261 21.7565 36.5195 22.1861 36.5195 22.7728C36.5048 23.6738 35.3467 24.0891 34.2666 24.0891C32.7687 24.0891 31.9662 23.875 30.7465 23.3737L30.2525 23.1588L29.7275 26.178C30.6074 26.5495 32.2286 26.8793 33.9116 26.8937C37.8481 26.8937 40.4109 25.0908 40.4413 22.3006C40.4562 20.7695 39.4536 19.5964 37.2922 18.6378C35.98 18.0224 35.1764 17.6074 35.1764 16.9778C35.1918 16.4054 35.8561 15.8191 37.3373 15.8191C38.5569 15.7903 39.453 16.0621 40.1319 16.334L40.4712 16.4769L40.9814 13.5726Z'
              fill='white'
            />
            <path
              d='M45.9675 21.928C46.2764 21.1553 47.4653 18.1649 47.4653 18.1649C47.4497 18.1936 47.7737 17.378 47.9589 16.8773L48.2211 18.0362C48.2211 18.0362 48.9315 21.2556 49.0858 21.928C48.4995 21.928 46.7085 21.928 45.9675 21.928ZM50.5984 13.2432H47.6965C46.8016 13.2432 46.1218 13.4862 45.7357 14.3591L40.1631 26.6925H44.0996C44.0996 26.6925 44.7476 25.0325 44.8869 24.675C45.3188 24.675 49.1482 24.675 49.7037 24.675C49.8114 25.1472 50.1514 26.6925 50.1514 26.6925H53.625L50.5984 13.2432Z'
              fill='white'
            />
            <path
              d='M20.4959 13.2432L16.8218 22.4144L16.4203 20.5544C15.741 18.4082 13.6107 16.0763 11.2334 14.9168L14.5987 26.6784H18.566L24.4629 13.2432H20.4959Z'
              fill='white'
            />
            <path
              d='M13.4103 13.2432H7.37425L7.3125 13.5149C12.021 14.631 15.1393 17.3213 16.4205 20.555L15.1083 14.3737C14.8923 13.5147 14.2284 13.2715 13.4103 13.2432Z'
              fill='#FAA61A'
            />
          </g>
        </svg>
      );
    case 'MCard':
      return (
        <svg viewBox='0 0 61 39' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g>
            <rect width='60.9375' height='39' rx='3' fill='#0F3560' />
            <path
              d='M35.5648 29.12H24.8623V9.88574H35.5648V29.12Z'
              fill='#FF5F00'
            />
            <path
              d='M25.5483 19.5013C25.5483 15.5995 27.3752 12.124 30.22 9.88416C28.1397 8.2463 25.5141 7.26873 22.6607 7.26873C15.9055 7.26873 10.4297 12.7454 10.4297 19.5013C10.4297 26.2573 15.9055 31.7339 22.6607 31.7339C25.5141 31.7339 28.1397 30.7563 30.22 29.1185C27.3752 26.8787 25.5483 23.4031 25.5483 19.5013Z'
              fill='#EB001B'
            />
            <path
              d='M50.0001 19.5013C50.0001 26.2573 44.5243 31.7339 37.7691 31.7339C34.9157 31.7339 32.2901 30.7563 30.209 29.1185C33.0546 26.8787 34.8815 23.4031 34.8815 19.5013C34.8815 15.5995 33.0546 12.124 30.209 9.88416C32.2901 8.2463 34.9157 7.26873 37.7691 7.26873C44.5243 7.26873 50.0001 12.7454 50.0001 19.5013Z'
              fill='#F79E1B'
            />
            <path
              d='M19.6333 19.5789C19.6333 19.0446 19.9834 18.6056 20.5556 18.6056C21.1023 18.6056 21.4713 19.0257 21.4713 19.5789C21.4713 20.1321 21.1023 20.5522 20.5556 20.5522C19.9834 20.5522 19.6333 20.1132 19.6333 19.5789ZM22.0945 19.5789V18.0589H21.4335V18.428C21.2238 18.1543 20.9057 17.9825 20.4733 17.9825C19.6209 17.9825 18.9526 18.6508 18.9526 19.5789C18.9526 20.5078 19.6209 21.1753 20.4733 21.1753C20.9057 21.1753 21.2238 21.0035 21.4335 20.7298V21.0989H22.0945V19.5789ZM44.4309 19.5789C44.4309 19.0446 44.7811 18.6056 45.3532 18.6056C45.9006 18.6056 46.269 19.0257 46.269 19.5789C46.269 20.1321 45.9006 20.5522 45.3532 20.5522C44.7811 20.5522 44.4309 20.1132 44.4309 19.5789ZM46.8928 19.5789V16.8382H46.2311V18.428C46.0215 18.1543 45.7034 17.9825 45.271 17.9825C44.4185 17.9825 43.7503 18.6508 43.7503 19.5789C43.7503 20.5078 44.4185 21.1753 45.271 21.1753C45.7034 21.1753 46.0215 21.0035 46.2311 20.7298V21.0989H46.8928V19.5789ZM30.2992 18.5743C30.7251 18.5743 30.9988 18.8415 31.0686 19.3117H29.4912C29.5618 18.8728 29.8282 18.5743 30.2992 18.5743ZM30.3123 17.9825C29.4213 17.9825 28.7982 18.6311 28.7982 19.5789C28.7982 20.5456 29.4468 21.1753 30.3567 21.1753C30.8146 21.1753 31.2339 21.061 31.603 20.7494L31.279 20.2595C31.0242 20.4626 30.6996 20.5776 30.3946 20.5776C29.9687 20.5776 29.5807 20.3804 29.4854 19.833H31.7427C31.7493 19.7507 31.7558 19.6677 31.7558 19.5789C31.7493 18.6311 31.164 17.9825 30.3123 17.9825ZM38.2936 19.5789C38.2936 19.0446 38.6437 18.6056 39.2159 18.6056C39.7626 18.6056 40.1316 19.0257 40.1316 19.5789C40.1316 20.1321 39.7626 20.5522 39.2159 20.5522C38.6437 20.5522 38.2936 20.1132 38.2936 19.5789ZM40.7548 19.5789V18.0589H40.0938V18.428C39.8834 18.1543 39.566 17.9825 39.1336 17.9825C38.2812 17.9825 37.6129 18.6508 37.6129 19.5789C37.6129 20.5078 38.2812 21.1753 39.1336 21.1753C39.566 21.1753 39.8834 21.0035 40.0938 20.7298V21.0989H40.7548V19.5789ZM34.5606 19.5789C34.5606 20.5012 35.2027 21.1753 36.1825 21.1753C36.6404 21.1753 36.9454 21.0734 37.2759 20.8128L36.9585 20.2785C36.7103 20.4568 36.4497 20.5522 36.1628 20.5522C35.6351 20.5456 35.2471 20.1642 35.2471 19.5789C35.2471 18.9936 35.6351 18.6122 36.1628 18.6056C36.4497 18.6056 36.7103 18.701 36.9585 18.8793L37.2759 18.345C36.9454 18.0844 36.6404 17.9825 36.1825 17.9825C35.2027 17.9825 34.5606 18.6566 34.5606 19.5789ZM43.0827 17.9825C42.7013 17.9825 42.4531 18.1608 42.2813 18.428V18.0589H41.6261V21.0989H42.2878V19.3947C42.2878 18.8917 42.504 18.6122 42.9364 18.6122C43.0704 18.6122 43.2101 18.6311 43.3499 18.6886L43.5537 18.0655C43.4074 18.008 43.2167 17.9825 43.0827 17.9825ZM25.3637 18.3006C25.0456 18.091 24.6074 17.9825 24.124 17.9825C23.3538 17.9825 22.8581 18.3516 22.8581 18.9558C22.8581 19.4515 23.2272 19.7572 23.9071 19.8526L24.2194 19.897C24.5819 19.948 24.7529 20.0433 24.7529 20.2151C24.7529 20.4503 24.5113 20.5842 24.0599 20.5842C23.6021 20.5842 23.2716 20.4379 23.0488 20.2661L22.7373 20.7807C23.0998 21.0479 23.5577 21.1753 24.0534 21.1753C24.9313 21.1753 25.4401 20.7618 25.4401 20.1831C25.4401 19.6488 25.0398 19.3692 24.3781 19.2739L24.0665 19.2288C23.7804 19.1909 23.5511 19.1341 23.5511 18.9303C23.5511 18.7075 23.7673 18.5743 24.1298 18.5743C24.5178 18.5743 24.8934 18.7206 25.0776 18.8349L25.3637 18.3006ZM33.8924 17.9825C33.5109 17.9825 33.2627 18.1608 33.0916 18.428V18.0589H32.4365V21.0989H33.0974V19.3947C33.0974 18.8917 33.3136 18.6122 33.7461 18.6122C33.88 18.6122 34.0198 18.6311 34.1595 18.6886L34.3634 18.0655C34.217 18.008 34.0263 17.9825 33.8924 17.9825ZM28.2515 18.0589H27.1705V17.1366H26.5022V18.0589H25.8856V18.6631H26.5022V20.0499C26.5022 20.7553 26.7759 21.1753 27.5577 21.1753C27.8446 21.1753 28.175 21.0865 28.3847 20.9402L28.194 20.3738C27.9967 20.4881 27.7805 20.5456 27.6087 20.5456C27.2782 20.5456 27.1705 20.3418 27.1705 20.0368V18.6631H28.2515V18.0589ZM18.3681 21.0989V19.1909C18.3681 18.4724 17.9102 17.9891 17.1721 17.9825C16.7841 17.9759 16.3837 18.0968 16.1034 18.5234C15.8938 18.1863 15.5633 17.9825 15.0989 17.9825C14.7742 17.9825 14.4568 18.0779 14.2086 18.4338V18.0589H13.5469V21.0989H14.2144V19.4137C14.2144 18.8859 14.507 18.6056 14.9591 18.6056C15.3981 18.6056 15.6201 18.8917 15.6201 19.4071V21.0989H16.2883V19.4137C16.2883 18.8859 16.5933 18.6056 17.0323 18.6056C17.4836 18.6056 17.6998 18.8917 17.6998 19.4071V21.0989H18.3681Z'
              fill='white'
            />
          </g>
        </svg>
      );
    case 'share':
      return (
        <svg viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M6.00004 15.5C6.87469 15.4974 7.71626 15.1653 8.35704 14.57L14.617 18.147C14.4073 18.9666 14.4998 19.8343 14.8775 20.5913C15.2552 21.3483 15.893 21.9439 16.674 22.2692C17.455 22.5944 18.327 22.6274 19.1304 22.3623C19.9338 22.0971 20.6148 21.5515 21.0488 20.8252C21.4827 20.099 21.6406 19.2408 21.4935 18.4076C21.3464 17.5745 20.9042 16.8222 20.2478 16.2885C19.5914 15.7548 18.7647 15.4753 17.919 15.5013C17.0734 15.5273 16.2655 15.857 15.643 16.43L9.38304 12.853C9.44904 12.603 9.48504 12.344 9.49104 12.085L15.641 8.56996C16.2332 9.10874 16.9927 9.42747 17.792 9.47268C18.5913 9.51789 19.3818 9.28684 20.031 8.81828C20.6802 8.34972 21.1484 7.67217 21.3572 6.89929C21.5661 6.1264 21.5027 5.30522 21.1779 4.5735C20.853 3.84178 20.2864 3.24404 19.5731 2.88056C18.8597 2.51708 18.0431 2.40998 17.2602 2.57723C16.4772 2.74447 15.7756 3.17588 15.2731 3.79909C14.7705 4.42229 14.4976 5.19937 14.5 5.99996C14.504 6.28796 14.543 6.57497 14.617 6.85296L8.93304 10.1C8.60341 9.59003 8.1468 9.17461 7.60805 8.89454C7.06931 8.61446 6.46697 8.47936 5.86021 8.50251C5.25346 8.52566 4.66316 8.70627 4.14732 9.02658C3.63148 9.34689 3.20785 9.79589 2.91804 10.3295C2.62823 10.863 2.48222 11.4628 2.49435 12.0699C2.50648 12.677 2.67634 13.2704 2.98723 13.792C3.29812 14.3136 3.73936 14.7453 4.26758 15.0447C4.7958 15.3442 5.39284 15.5011 6.00004 15.5Z'
            fill='#FFC85E'
          />
        </svg>
      );
    case 'delet':
      return (
        <svg viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M12.625 3.25H17.3125C17.5197 3.25 17.7184 3.33231 17.8649 3.47882C18.0114 3.62534 18.0938 3.82405 18.0938 4.03125C18.0938 4.23845 18.0114 4.43716 17.8649 4.58368C17.7184 4.73019 17.5197 4.8125 17.3125 4.8125H16.4484L15.2734 15.4C15.1673 16.3555 14.7125 17.2384 13.9961 17.8795C13.2797 18.5207 12.352 18.8751 11.3906 18.875H7.60938C6.64797 18.8751 5.72029 18.5207 5.00389 17.8795C4.28749 17.2384 3.8327 16.3555 3.72656 15.4L2.55 4.8125H1.6875C1.4803 4.8125 1.28159 4.73019 1.13507 4.58368C0.98856 4.43716 0.90625 4.23845 0.90625 4.03125C0.90625 3.82405 0.98856 3.62534 1.13507 3.47882C1.28159 3.33231 1.4803 3.25 1.6875 3.25H6.375C6.375 2.4212 6.70424 1.62634 7.29029 1.04029C7.87634 0.45424 8.6712 0.125 9.5 0.125C10.3288 0.125 11.1237 0.45424 11.7097 1.04029C12.2958 1.62634 12.625 2.4212 12.625 3.25ZM9.5 1.6875C9.0856 1.6875 8.68817 1.85212 8.39515 2.14515C8.10212 2.43817 7.9375 2.8356 7.9375 3.25H11.0625C11.0625 2.8356 10.8979 2.43817 10.6049 2.14515C10.3118 1.85212 9.9144 1.6875 9.5 1.6875ZM7.15625 7.9375V14.1875C7.15625 14.3947 7.23856 14.5934 7.38507 14.7399C7.53159 14.8864 7.7303 14.9688 7.9375 14.9688C8.1447 14.9688 8.34341 14.8864 8.48993 14.7399C8.63644 14.5934 8.71875 14.3947 8.71875 14.1875V7.9375C8.71875 7.7303 8.63644 7.53159 8.48993 7.38507C8.34341 7.23856 8.1447 7.15625 7.9375 7.15625C7.7303 7.15625 7.53159 7.23856 7.38507 7.38507C7.23856 7.53159 7.15625 7.7303 7.15625 7.9375ZM11.0625 7.15625C10.8553 7.15625 10.6566 7.23856 10.5101 7.38507C10.3636 7.53159 10.2812 7.7303 10.2812 7.9375V14.1875C10.2812 14.3947 10.3636 14.5934 10.5101 14.7399C10.6566 14.8864 10.8553 14.9688 11.0625 14.9688C11.2697 14.9688 11.4684 14.8864 11.6149 14.7399C11.7614 14.5934 11.8438 14.3947 11.8438 14.1875V7.9375C11.8438 7.7303 11.7614 7.53159 11.6149 7.38507C11.4684 7.23856 11.2697 7.15625 11.0625 7.15625Z'
            fill='white'
          />
        </svg>
      );

    default:
      return null;
  }
}
