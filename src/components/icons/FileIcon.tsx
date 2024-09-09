type Props = {
  width?: string;
  height?: string;
};

export default function FileIcon({ height = "100px", width = "100px" }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="-4 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill-rule="evenodd" clip-rule="evenodd">
        <path
          d="M5.113.007c-2.803 0-5.074 2.271-5.074 5.074v53.84c0 2.803 2.271 5.074 5.074 5.074h45.774c2.801 0 5.074-2.271 5.074-5.074v-38.606l-18.903-20.308h-31.945z"
          fill="#8199AF"
        />

        <path
          d="M55.976 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z"
          fill="#617F9B"
        />

        <path
          d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z"
          opacity=".5"
          fill="#ffffff"
        />
      </g>
    </svg>
  );
}
