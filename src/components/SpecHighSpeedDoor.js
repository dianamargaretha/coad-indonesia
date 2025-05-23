import React from 'react'
import isCurrentLang from '@/utils/isCurrentLang';

const SpecHighSpeedDoor = ({ type }) => {
    return (
        <div>
            <div className='pb-28 spec-table'>
                <div className='container'>
                    <div className='section-title'>
                        <h2 className='title'>{isCurrentLang('Specification', 'Spesifikasi')}</h2>
                    </div>
                    <div className='flex gap-4 header-title-wrap'>
                        <div className='flex-1'></div>
                        <div className='flex-1'>
                            <div className='header-title'>
                                <span>Standard Type <br /> C-1</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className='header-title'>
                                <span>Deluxe Type <br /> C-2</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className='header-title'>
                                <span>Premium Type <br /> C-3</span>
                            </div>
                        </div>
                    </div>
                    <div className={`list-table-wrapper type-${type}`}>
                        <div className='flex gap-0 md:gap-4 list list-first' data-title='Maximum Size'>
                            <div className='flex-1'>Maximum Size</div>
                            <div className='flex-1'>
                                <div>
                                    <span>(W) 6000mm </span><span className='whitespace-nowrap'>* (H) 5000mm</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>(W) 6000mm </span><span className='whitespace-nowrap'>* (H) 5000mm</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>(W) 6000mm </span><span className='whitespace-nowrap'>* (H) 8000mm</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-0 md:gap-4 list' data-title='Opening/closing speed'>
                            <div className='flex-1'>Opening/closing speed</div>
                            <div className='flex-1'>
                                <div>
                                    <span>~1.5 m/s</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>~1.5 m/s</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>~1.5 m/s</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-0 md:gap-4 list' data-title='Maximum wind speed'>
                            <div className='flex-1'>Maximum wind speed</div>
                            <div className='flex-1'>
                                <div>
                                    <span>20m/sec</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>20m/sec</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>25m/sec</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-0 md:gap-4 list' data-title='Curtains'>
                            <div className='flex-1'>Sheet</div>
                            <div className='flex-1'>
                                <div>
                                    <span>PVC sheet 2mm</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>PVC sheet 2mm</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>PVC sheet 2mm</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-0 md:gap-4 list' data-title='Windshield Safety bar'>
                            <div className='flex-1'>Windshield Safety bar</div>
                            <div className='flex-1'>
                                <div>
                                    <span><img className='mx-auto' src='/assets/ornamen/check-mark.svg' alt='check' /></span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span><img className='mx-auto' src='/assets/ornamen/check-mark.svg' alt='check' /></span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span><img className='mx-auto' src='/assets/ornamen/close-icon.svg' alt='close' /></span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-0 md:gap-4 list' data-title='Internal structure'>
                            <div className='flex-1'>Internal structure</div>
                            <div className='flex-1'>
                                <div>
                                    <span>Built-in self-contained brush</span>
                                    <span>
                                        <img className='mx-auto pt-2 rounded-full' width={58} src='/assets/ornamen/brush.jpg' alt='curtains' />
                                    </span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>Built-in self-contained brush</span>
                                    <span>
                                        <img className='mx-auto pt-2 rounded-full' width={58} src='/assets/ornamen/brush.jpg' alt='curtains' />
                                    </span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>The two sides of the curtains are linked by a closed zipper (TOOTH)</span>
                                    <span>
                                        <img className='mx-auto pt-2' width={58} src='/assets/ornamen/img-tb-1.jpeg' alt='curtains' />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-0 md:gap-4 list' data-title='Auto-recovery'>
                            <div className='flex-1'>Auto-recovery</div>
                            <div className='flex-1'>
                                <div>
                                    <span><img className='mx-auto' src='/assets/ornamen/close-icon.svg' alt='close' /></span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span><img className='mx-auto' src='/assets/ornamen/close-icon.svg' alt='close' /></span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span><img className='mx-auto' src='/assets/ornamen/check-mark.svg' alt='check' /></span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-0 md:gap-4 list' data-title='Outstanding Features'>
                            <div className='flex-1'>Outstanding Features</div>
                            <div className='flex-1'>
                                <div>
                                    <span className='text-[#37A76B]'> Energy efficiency, durability, quick operation</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span className='text-[#37A76B]'>Rust/corrosion resistance, air-tightness, compact
                                        design</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span className='text-[#37A76B]'>High durability, high sealing power, wind-pressure
                                        resistance, auto-recovery function, and high safety feature</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecHighSpeedDoor