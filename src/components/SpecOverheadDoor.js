import React from 'react'
import isCurrentLang from '@/utils/isCurrentLang';

const SpecOverheadDoor = ({ type }) => {
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
                                <span>Overhead Door Model <br /> C-20</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className='header-title'>
                                <span>Overhead Door Model <br /> C-30</span>
                            </div>
                        </div>
                    </div>
                    <div className={`list-table-wrapper-2 type-${type}`}>
                        <div className='flex gap-0 md:gap-4 list list-first' data-title='Maximum Size'>
                            <div className='flex-1'>Maximum Size</div>
                            <div className='flex-1'>
                                <div>
                                    <span>(W) 8000mm * (H) 5000mm</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>(W) 11000mm * (H) 8000mm</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 list' data-title='Opening/closing speed'>
                            <div className='flex-1'>Opening/closing speed</div>
                            <div className='flex-1'>
                                <div>
                                    <span>0.3~0.7m/s</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>0.2~0.3m/s</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 list' data-title='Maximum wind speed'>
                            <div className='flex-1'>Maximum wind speed</div>
                            <div className='flex-1'>
                                <div>
                                    <span>45m/sec</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>45m/sec</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 list' data-title='Thermal conductivity'>
                            <div className='flex-1'>Thermal conductivity</div>
                            <div className='flex-1'>
                                <div>
                                    <span>0.021W/mk</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>0.021W/mk</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 list' data-title='Operation principle'>
                            <div className='flex-1'>Operation principle</div>
                            <div className='flex-1'>
                                <div>
                                    <span>Chain</span>
                                    <span>
                                        <img width={100} className='mx-auto' src='/assets/ornamen/chain.jpeg' alt='chain' style={{ borderRadius: '50%' }} />
                                    </span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>Cable</span>
                                    <span>
                                        <img width={100} className='mx-auto' src='/assets/ornamen/CABLE.png' alt='chain' />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 list' data-title='Rolling door type'>
                            <div className='flex-1'>Rolling door type</div>
                            <div className='flex-1'>
                                <div>
                                    <span>Stacking</span>
                                    <span>
                                        <img width={100} className='mx-auto' src='/assets/ornamen/stacking.jpeg' alt='stacking' style={{ borderRadius: '50%' }} />
                                    </span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>Lift</span>
                                    <div className='flex flex-wrap'>
                                        <img className='mx-auto' src='/assets/ornamen/opening-garage.jpeg' alt='doors' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 list' data-title='Panel'>
                            <div className='flex-1'>Panel</div>
                            <div className='flex-1'>
                                <div>
                                    <span>Polyurethane (PU) 50mm</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>Polyurethane (PU) 50mm</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 list' data-title='Motor'>
                            <div className='flex-1'>Motor</div>
                            <div className='flex-1'>
                                <div>
                                    <span>SUMITOMO HYPONIC-GEARED MOTOR(IP44)</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span>OVERHEADDOOR WORM GEAR MOTOR (90Nm-160Nm)</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 list' data-title='Outstanding Features'>
                            <div className='flex-1'>Outstanding Features</div>
                            <div className='flex-1'>
                                <div>
                                    <span className='text-[#37A76B]'>Specialized for narrow ceilings, 3 times faster than conventional doors</span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <div>
                                    <span className='text-[#37A76B]'>Save energy and provide an effective anti-theft solution</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecOverheadDoor