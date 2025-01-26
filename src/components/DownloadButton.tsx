// components/DownloadButton.tsx
import React from 'react';
import Link from 'next/link';
import { Icons } from "@/components/icons";

interface DownloadButtonProps {
    href: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ href }) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-6 right-6 rounded-md border border-primary/20 p-2 transition-colors hover:bg-primary/5 focus:bg-primary/10 flex items-center"
            
        >
           <Icons.download className="h-5 w-5  mr-2" />
          <span className=" font-medium">Download Resume</span>
        </Link>
    );
};

export default DownloadButton;