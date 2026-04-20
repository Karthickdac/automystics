import { Router, type IRouter } from "express";
import healthRouter from "./health";
import enquiriesRouter from "./enquiries";
import adminRouter from "./admin";
import siteSettingsRouter from "./site-settings";
import locationsRouter from "./locations";

const router: IRouter = Router();

router.use(healthRouter);
router.use(enquiriesRouter);
router.use(siteSettingsRouter);
router.use(locationsRouter);
router.use("/admin", adminRouter);

export default router;
