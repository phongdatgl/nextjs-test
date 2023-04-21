import { NextApiRequest, NextApiResponse } from 'next'

async function referer(req, res) {
    return res.status(200).json({content: req.headers?.referer ?? '' })
}

export default referer
