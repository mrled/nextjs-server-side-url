// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const hostFromVercelEnv = process.env.VERCEL_URL || "unset"
  const hostFromDevEnv = process.env.LOCAL_DEV_URL || "unset"
  const vercelEnv = process.env.VERCEL_ENV || "unset"
  res.statusCode = 200
  res.json({
    hostFromHeaders: req.headers.host,
    hostFromVercelEnv,
    hostFromDevEnv,
    vercelEnv,
  })
}
