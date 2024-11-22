import React from "react";

interface LogoSvgProps {
  fill?: string;
  className?: string;
}

const LogoSvg: React.FC<LogoSvgProps> = ({ fill, className }) => {

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="607.000000pt"
      height="722.000000pt"
      viewBox="0 0 607.000000 722.000000"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <g transform="translate(0.000000,722.000000) scale(0.100000,-0.100000)" fill={fill} stroke="none">
        <path
          d="M2769 7066 c-139 -29 -238 -65 -383 -139 -323 -164 -619 -405 -954
   -777 -215 -239 -446 -560 -562 -782 l-30 -58 57 26 c170 77 358 132 527 155
   144 19 417 7 546 -24 274 -66 565 -203 887 -418 l132 -88 157 105 c328 218
   625 356 883 409 63 14 285 33 371 33 35 0 172 -16 250 -29 171 -29 441 -114
   573 -180 31 -16 57 -26 57 -21 0 13 -134 244 -196 338 -170 258 -363 495 -578
   709 -269 268 -507 446 -786 589 -243 124 -452 177 -696 175 -110 -1 -177 -7
   -255 -23z m307 -155 c-3 -5 -18 -11 -33 -14 -92 -17 -184 -56 -353 -147 -256
   -139 -451 -311 -643 -566 -41 -55 -87 -108 -101 -117 -29 -19 -94 -22 -129 -6
   -49 22 -62 100 -26 159 32 52 291 306 389 381 230 175 472 281 715 312 61 8
   186 7 181 -2z"
        />
        <path
          d="M1505 5219 c-384 -51 -735 -340 -880 -724 -54 -146 -74 -334 -50
   -495 49 -341 244 -664 634 -1050 118 -117 180 -175 254 -237 l51 -42 32 67
   c24 49 64 100 150 192 259 274 365 377 417 404 215 108 457 -13 457 -229 0
   -115 17 -93 -505 -633 l-80 -83 43 -39 c67 -60 122 -61 220 -4 63 37 250 226
   413 419 19 22 78 87 131 144 l97 103 -96 107 c-53 58 -147 159 -208 224 l-110
   119 -47 -6 c-109 -12 -192 50 -229 172 l-12 41 -56 -28 c-31 -16 -79 -36 -107
   -45 -59 -19 -296 -67 -303 -61 -2 3 12 12 33 20 20 9 109 55 199 102 89 48
   177 94 195 102 31 15 32 17 32 73 0 32 5 78 12 103 7 24 9 47 5 51 -3 4 -46
   -14 -94 -39 -48 -25 -113 -52 -143 -60 -101 -27 -193 -47 -198 -42 -3 2 17 14
   44 25 257 107 464 335 544 598 19 61 21 90 18 170 -5 108 -21 163 -75 255
   -113 193 -349 320 -618 332 -55 2 -131 0 -170 -6z m-10 -215 c22 -21 26 -31
   21 -57 -8 -38 -11 -40 -111 -73 -191 -63 -355 -179 -462 -328 -71 -98 -104
   -115 -144 -75 -44 44 -6 128 119 261 116 123 260 217 417 272 91 33 125 33
   160 0z"
        />
        <path
          d="M4208 5220 c-316 -37 -567 -247 -624 -519 -56 -271 169 -640 494
   -809 45 -24 82 -45 82 -46 0 -7 -164 33 -224 54 -32 11 -87 36 -122 55 -34 19
   -65 35 -69 35 -4 0 -4 -19 -1 -42 3 -24 8 -73 12 -109 l6 -66 47 -23 c25 -12
   89 -47 141 -78 52 -30 135 -75 185 -98 49 -24 84 -44 78 -44 -26 0 -253 51
   -307 70 -31 10 -78 30 -105 44 l-50 25 -16 -49 c-21 -65 -84 -134 -140 -155
   -40 -16 -66 -16 -108 1 -14 5 -164 -142 -343 -336 -38 -41 -78 -82 -88 -91
   -19 -16 -19 -17 4 -50 48 -69 137 -178 279 -343 81 -92 151 -174 157 -182 6
   -8 15 -14 19 -14 7 0 106 83 169 143 l30 28 -35 37 c-19 20 -85 90 -147 155
   -147 156 -167 189 -167 287 0 81 19 129 70 183 57 60 178 98 273 86 116 -15
   162 -54 561 -471 103 -109 151 -179 151 -224 0 -8 5 -14 11 -14 14 0 197 158
   318 274 478 460 656 741 702 1114 21 169 -14 380 -91 540 -208 436 -668 688
   -1152 632z m162 -209 c52 -38 27 -121 -37 -121 -90 -1 -242 -56 -329 -120 -78
   -58 -112 -64 -143 -24 -12 15 -21 35 -21 45 0 26 45 75 110 119 94 64 158 88
   325 124 30 6 67 -3 95 -23z"
        />
        <path
          d="M2489 4613 c-11 -12 -14 -61 -14 -212 0 -228 -4 -244 -98 -374 -67
   -92 -87 -153 -87 -256 1 -142 77 -240 165 -211 98 32 272 305 310 488 29 134
   13 307 -36 403 -56 110 -202 209 -240 162z"
        />
        <path
          d="M3397 4615 c-96 -33 -167 -109 -208 -224 -21 -57 -24 -84 -24 -196 0
   -144 18 -222 77 -340 60 -119 173 -266 223 -289 61 -30 121 1 162 82 13 28 18
   60 18 127 0 109 -16 157 -86 252 -75 103 -91 154 -96 308 -3 72 -1 155 5 184
   16 90 -5 119 -71 96z"
        />
        <path
          d="M2355 4255 c-11 -27 -41 -82 -67 -122 -26 -41 -48 -76 -48 -78 0 -19
   36 3 74 46 52 58 85 146 69 182 -9 19 -12 16 -28 -28z"
        />
        <path
          d="M3561 4280 c-1 -66 91 -220 130 -220 17 0 14 7 -20 53 -21 29 -55 84
   -74 123 -27 51 -36 63 -36 44z"
        />
        <path
          d="M2165 3231 c-53 -24 -484 -471 -514 -533 -27 -56 -27 -90 0 -146 41
   -85 146 -125 232 -88 27 11 394 380 519 521 64 73 71 101 39 172 -28 60 -88
   93 -172 93 -41 0 -79 -7 -104 -19z"
        />
        <path
          d="M3575 3236 c-16 -8 -43 -27 -59 -44 -36 -38 -47 -113 -23 -158 20
   -38 482 -511 536 -549 93 -63 219 -36 268 59 20 38 21 113 2 148 -27 51 -487
   515 -533 537 -49 24 -144 28 -191 7z"
        />
        <path
          d="M141 2887 c13 -370 99 -696 279 -1062 334 -677 848 -1179 1510 -1475
   100 -45 146 -61 295 -100 17 -4 42 -13 58 -19 15 -6 27 -9 27 -6 0 2 15 -1 33
   -6 39 -12 66 -19 92 -24 11 -1 73 -12 138 -24 373 -65 725 -52 1092 40 405
   101 644 208 952 427 139 99 243 190 411 362 101 103 274 311 292 350 16 36 35
   67 52 87 9 10 23 35 33 56 9 20 21 37 26 37 5 0 9 7 9 15 0 8 5 15 10 15 6 0
   10 7 10 15 0 8 5 15 12 15 6 0 8 3 5 7 -4 3 0 14 8 23 16 18 45 70 111 200
   178 352 276 724 290 1095 l6 150 -152 -230 c-83 -126 -165 -248 -180 -270 -16
   -22 -59 -88 -97 -147 -40 -63 -75 -107 -84 -108 -9 0 -34 7 -55 16 -59 25
   -545 204 -553 204 -3 0 -21 -26 -40 -58 -127 -213 -235 -372 -252 -372 -11 0
   -19 4 -19 9 0 5 -15 14 -32 21 -18 7 -84 37 -147 66 -62 30 -116 54 -121 54
   -10 0 -253 121 -330 165 l-65 37 -29 -34 c-16 -18 -114 -126 -218 -239 -103
   -113 -201 -222 -216 -242 -26 -35 -47 -46 -54 -29 -1 4 -41 34 -88 67 -129 89
   -469 343 -519 387 -24 21 -47 38 -50 38 -11 0 -228 -200 -443 -408 l-76 -75
   -59 46 c-123 96 -394 329 -537 463 l-99 93 -48 -20 c-27 -10 -75 -32 -106 -48
   -32 -16 -87 -41 -123 -56 -36 -15 -132 -58 -214 -97 l-149 -70 -19 24 c-38 49
   -307 407 -370 493 -36 50 -96 137 -133 195 -38 58 -71 108 -74 112 -3 4 -3
   -70 0 -165z m961 -1088 c13 -6 58 -57 101 -114 96 -128 235 -283 318 -355 116
   -100 129 -115 129 -151 0 -72 -67 -91 -139 -39 -120 87 -344 330 -455 493 -59
   88 -61 150 -6 170 23 8 27 8 52 -4z m931 -763 c327 -129 651 -198 931 -197 76
   0 137 -1 135 -3 -9 -9 -203 -38 -315 -46 -190 -15 -399 -1 -579 36 -111 23
   -312 94 -340 120 -49 46 -25 134 38 134 10 0 68 -20 130 -44z"
        />
        <path
          d="M2940 2927 c0 -7 -14 -26 -31 -43 -17 -16 -73 -78 -124 -139 -51 -60
   -109 -127 -128 -149 l-35 -38 31 -28 c57 -49 250 -169 357 -223 102 -50 107
   -52 190 -52 90 0 107 7 202 87 l27 23 -121 140 c-67 77 -174 206 -240 288 -65
   81 -121 147 -123 147 -3 0 -5 -6 -5 -13z m46 -172 c-14 -11 -26 -25 -26 -31 0
   -13 50 -60 114 -107 62 -47 45 -48 -31 -2 -66 39 -163 125 -163 145 0 7 17 28
   37 48 l37 34 29 -33 30 -33 -27 -21z"
        />
      </g>
    </svg>
  );
};

export default LogoSvg;
