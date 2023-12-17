import React, { useState } from 'react'

const Accordion = ({ title, content }) => {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => setExpanded((current) => !current)

    return (
        <div className="cursor-pointer bg-white" onClick={toggleExpanded}>
            <div className="text-left px-3 items-center h-12 font-semibold hover:bg-gray-200 flex justify-between flex-row">
                <h5 className="flex-1">
                    {title}
                </h5>
                <div className="flex-none pl-2">
                    <svg className="h-4 w-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className={`overflow-hidden transition-[max-height] duration-500 ease-in ${expanded ? "max-h-40" : "max-h-0"}`}>
                {content}
            </div>
        </div>
    )
}

export default Accordion