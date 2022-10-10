import React from 'react';
import { HeaderDesktop, HeaderMobile, MynameDesktop, MynameMobile, MyskillDesktop, MyskillMobile, WrDesktop, WrMobile, XpWorkDesktop, XpWorkMobile } from '../components/molecules';
import useResponsive from '../helper/useResponsive';

const Index = () => {
	const { isDesktop, isTablet, isMobile, isOnlyMobile } = useResponsive();
	return (
		<div className='landingPageBase'>
			{isDesktop || isTablet ? <HeaderDesktop /> : <></>}
			{isMobile || isOnlyMobile ? <HeaderMobile /> : <></>}
			{isDesktop || isTablet ? <MynameDesktop /> : <></>}
			{isMobile || isOnlyMobile ? <MynameMobile /> : <></>}
			{isDesktop || isTablet ? <MyskillDesktop /> : <></>}
			{isMobile || isOnlyMobile ? <MyskillMobile /> : <></>}
			{isDesktop || isTablet ? <XpWorkDesktop /> : <></>}
			{isMobile || isOnlyMobile ? <XpWorkMobile /> : <></>}
			{isDesktop || isTablet ? <WrDesktop /> : <></>}
			{isMobile || isOnlyMobile ? <WrMobile /> : <></>}
		</div>
	)
}

export default Index;