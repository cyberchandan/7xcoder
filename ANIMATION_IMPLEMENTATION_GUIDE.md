# Framer Motion Animation Implementation Guide

## Overview
This guide provides the complete animation patterns for all Pages under the Services component. 221+ pages need animations added following specific patterns for each page type.

## Completed ✅
- **HRMS**: All 5 pages (Page1-5) - COMPLETED
- **DigitalMarketingService/Page6.jsx** - COMPLETED
- **BrandingStrategy Page2 Files** (5 of 9 completed):
  - ✅ Root Page2.jsx
  - ✅ MarketAndAudienceResearch/Page2.jsx
  - ✅ BrandIdentityDesignSystems/Page2.jsx
  - ✅ StrategicBrandMessaging/Page2.jsx
  - ✅ ScalableBrandArchitecture/Page2.jsx

## Page2 Animation Template (Copy-Paste Ready)

Use this template for ALL Page2.jsx files (47 total files):

```javascript
import { motion } from 'framer-motion';
// ... other imports ...

// Animation Variants (Reusable - copy exactly)
const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeDown = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

// Benefit Component (use for benefit cards)
const Benefit = ({ img, title, text }) => (
  <motion.div className='e-commerce-services-benefits-div' variants={fadeUp}>
    <motion.img
      src={img}
      alt={title}
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
    />
    <h3 className="benefit-title">{title}</h3>
    <p className="benefit-text">{text}</p>
  </motion.div>
);

// In JSX, replace:
// <div className="benefites-2">BENEFITS</div>
// WITH:
<motion.div
  className="benefites-2"
  variants={fadeDown}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
>
  BENEFITS
</motion.div>

// Replace:
// <div className="benefites-containr-2"> ... benefit cards ... </div>
// WITH:
<motion.div
  className="benefites-containr-2"
  variants={containerVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
>
  {/* Use Benefit component for each card */}
</motion.div>

// Replace ul/li with motion versions:
<motion.ul variants={containerVariant}>
  <motion.li className="second-text" variants={fadeUp}>Item text</motion.li>
</motion.ul>
```

## Remaining Page2 Files to Update (38 files)

### BrandingStrategy (4 remaining)
- [ ] BrandSupportOptimization/Page2.jsx - Use template above
- [ ] BrandGuidelinesGovernance/Page2.jsx - Use template above
- [ ] BrandIntegrationImplementation/Page2.jsx - Use template above
- [ ] BrandStrategyPositioning/Page2.jsx - Use template above

### BusinessSoftwareSolutions (5 files)
- [ ] Page2.jsx (root)
- [ ] SystemIntegrationServices/Page2.jsx
- [ ] SecureScalableArchitecture/Page2.jsx
- [ ] ProcessAutomationSolutions/Page2.jsx
- [ ] CloudBasedSoftwareSolutions/Page2.jsx

### DesignCreativeService (8 files)
- [ ] Page2.jsx (root)
- [ ] GraphicDesign/Page2.jsx
- [ ] PostProduction/Page2.jsx
- [ ] PhotographyAndVideography/Page2.jsx
- [ ] 3DPV/Page2.jsx
- [ ] MotionGraphicsAndAnimation/Page2.jsx
- [ ] UIUXDrivenDevelopment/Page2.jsx
- [ ] ContentAndVideoMarketing/Page2.jsx

### DigitalMarketingService (8 files)
- [ ] Page2.jsx (root)
- [ ] PayPerClick/Page2.jsx
- [ ] OnlineReputationManagement/Page2.jsx
- [ ] EcommerceAndMarketing/Page2.jsx
- [ ] EmailAndInfluencerMarketing/Page2.jsx
- [ ] ContentAndVideoMarketing/Page2.jsx
- [ ] WebAndAppDevelopment/Page2.jsx
- [ ] AnalyticsROI/Page2.jsx

### EcommerceSolutions (7 files)
- [ ] Page2.jsx (root)
- [ ] SystemIntegrationServicesEcom/Page2.jsx
- [ ] SecureScalableArchitecture/Page2.jsx
- [ ] ProductInventoryOrders/Page2.jsx
- [ ] EnterpriseAndMarketplaceSolutions/Page2.jsx
- [ ] CustomE-commerceDevelopment/Page2.jsx
- [ ] CheckoutConversionOptimization/Page2.jsx

### WebAndAppDevelopment (2 files)
- [ ] Maintenance&Support/Page2.jsx (may have partial animations)
- [ ] CustomWebsiteDevelopment/Page2.jsx (may have partial animations)

## Other Page Types - Status

### Page1 Files (47 files)
- **Status:** Most already have animations (opacity, y, x, scale)
- **Action:** Verify they match specification:
  - h1: opacity 0→1, y -60→0, duration 0.8
  - p subtitles: opacity 0→1, y 60→0, duration 0.8
  - p content: opacity 0→1, x -120→0, duration 0.9
  - img: opacity 0→1, scale 0.6→1, duration 0.8
  - boxes: opacity 0→1, y 80→0, staggered delays

### Page3 Files (34 files)
- **Status:** Many have partial animations
- **Pattern Needed:**
  - motion.div para: x -120→0, opacity 0→1, duration 0.8
  - motion.img: scale 0.6→1, opacity 0→1, duration 0.8
  - Both use whileInView with viewport={{ once: false, amount: 0.3 }}

### Page4 Files (34 files)
- **Status:** Most appear to have cascade animations already
- **Pattern:** Cascade with index*0.15 delay on cards
- **Verify:** Check they have index-based delays

### Page5 Files (34 files)
- **Status:** Need verification
- **Pattern Needed:**
  - h1: y -60→0, opacity 0→1
  - section slider: opacity 0→1
  - div para: x -120→0, opacity 0→1
  - button: scale 0.9→1, opacity 0→1

### Page6 Files (8 DigitalMarketingService files + 1 completed)
- **Currently Complete:** DigitalMarketingService/Page6.jsx ✅
- **Need to verify/complete:** 8 others

## Implementation Steps

1. **For each remaining Page2 file:**
   - Add motion import at top
   - Copy variant definitions (containerVariant, fadeUp, fadeDown, slideLeft)
   - Create Benefit component
   - Wrap sections with motion components using variants
   - Replace ul/li with motion.ul/motion.li

2. **For Page1-5 verification:**
   - Check that animations match specified patterns
   - Add or update any missing animations
   - Ensure viewport={{ once: false, amount: 0.3 }} is set on all

3. **Test:**
   - Scroll through pages to verify animations trigger at correct times
   - Verify no console errors
   - Check that animations repeat (once: false)

## Quick Reference - Animation Values

All animations use:
- `viewport={{ once: false, amount: 0.3 }}` - Repeats animations on scroll, triggers at 30% visibility
- `transition={{ duration: 0.8, ease: "easeOut" }}` - Standard duration and easing
- Stagger: `staggerChildren: 0.2` - 0.2s delay between child animations
- Cascade delays: `index * 0.15` - For card animations

## Notes
- Total files to update: 221 pages across 7 services
- Pattern is consistent across all similar page types
- All content remains unchanged - ONLY animation properties added
- Animations follow accessibility best practices (not autoplaying, respect-prefers-reduced-motion by default)
