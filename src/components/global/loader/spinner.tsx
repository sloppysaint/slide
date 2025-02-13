type SpinnerProps = {
    color?: string;
  };
  
  export const Spinner = ({ color }: SpinnerProps) => {
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          className="inline w-8 h-8 animate-spin dark:text-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
         
        </svg>
      </div>
    );
  }