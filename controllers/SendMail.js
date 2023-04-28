const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD } = require("../config/envmail");
// const Mailgen = require("mailgen");

module.exports.registerMail = async (req, res) => {
  const { email } = req.body;
  let config = {
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  };
  let transporter = nodemailer.createTransport(config);

  let message = {
    from: EMAIL,
    to: email,
    subject: "Best-Buy",
    html: `
      <!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
	<title></title>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		@media (max-width:720px) {

			.desktop_hide table.icons-inner,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.image_block img.big,
			.row-content {
				width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
	</style>
</head>

<body style="background-color: #f9f9f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table border="0" cellpadding="0" cellspacing="0" className="nl-container" role="presentation"
		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9f9f9;" width="100%">
		<tbody>
			<tr>
				<td>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-1"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div className="spacer_block block-1"
														style="height:10px;line-height:10px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-2"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														className="image_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td className="pad"
																style="width:100%;padding-right:0px;padding-left:0px;">
																<div align="center" className="alignment"
																	style="line-height:10px"><img alt="logo image"
																		className="big" src="https://ci4.googleusercontent.com/proxy/Rn_5YDFn5FYV97CU2kG3qlots4ma5vmbcCpmYtP0lEA_78QieKY24e5pOwEgugnDyP8gG07P5RvXzfoD-TNNWLwrLUfbXruDmz_UAz2uRTdt00IJtuStGaXs4oYDN0C3LrP1cSwqjmTd3tk=s0-d-e1-ft#https://d1b85f968a.imgdist.com/public/users/Integrators/BeeProAgency/977698_962337/4.png"
																		style="display: block; height: auto; border: 0; width: 385px; max-width: 100%;"
																		title="logo image" width="385" /></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-3"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div className="spacer_block block-1"
														style="height:15px;line-height:15px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-4"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														className="image_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td className="pad"
																style="width:100%;padding-right:0px;padding-left:0px;">
																<div align="center" className="alignment"
																	style="line-height:10px"><img alt="Alternate text"
																		className="big"
																		src="https://ci4.googleusercontent.com/proxy/BVnfXQiihEYGXJbemBh2nNv4JFqp2z-_yLrmfL1nf9CwG3kwhZZ8pHqby5uM1pzBzRb639hobaLwHwtbodAsvuOWOC3SRgYOVYwpX4NncKpDfzn8YiV_LaOsabAjjK3wEFy1r-d011pILHvTLGzA_gh2g_rdZNgirQheelKnxoPkVFWhu3TsGdX4PhcEnx022nWNtBi4o6WzHBwK_Q=s0-d-e1-ft#https://d1b85f968a.imgdist.com/public/users/Integrators/BeeProAgency/977698_962337/editor_images/481b2edd-5b3a-435a-9aa5-218f8ab11d2d.png"
																		style="display: block; height: auto; border: 0; width: 700px; max-width: 100%;"
																		title="Alternate text" width="700" /></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-5"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #71acb0; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div className="spacer_block block-1"
														style="height:30px;line-height:30px;font-size:1px;"> </div>
													<table border="0" cellpadding="0" cellspacing="0"
														className="image_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td className="pad"
																style="width:100%;padding-right:0px;padding-left:0px;">
																<div align="center" className="alignment"
																	style="line-height:10px"><img alt="I'm an image"
																		className="big" src="https://ci3.googleusercontent.com/proxy/w4F7IbMzKHHdpNYVBk1wqWjniNIe5VigTxEfvKo1aEu3z_PdGM7qCEaAn91senWW0WxACWrmhoBnRHoCZiW8brWAIZ90lY99WwQctWuPt1b8AqmOZx0Wx-F2JHx9ZAlDPg=s0-d-e1-ft#https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1561/Welcome_Email.png"
																		style="display: block; height: auto; border: 0; width: 420px; max-width: 100%;"
																		title="I'm an image" width="420" /></div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														className="text_block block-3" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td className="pad"
																style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:10px;">
																<div style="font-family: sans-serif">
																	<div className=""
																		style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; color: #191919; line-height: 1.5;">
																		<p
																			style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 24px;">
																			<strong><span style="font-size:38px;">Hi
																					BestBuy User, </span></strong></p>
																		<p
																			style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 24px;">
																			<strong><span
																					style="font-size:38px;">welcome to
																					BestBuy</span></strong></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="10" cellspacing="0"
														className="text_block block-4" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td className="pad">
																<div style="font-family: sans-serif">
																	<div className=""
																		style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #191919; line-height: 1.2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
																			<span style="font-size:22px;">Thank you for
																				subscribing! Our Newsletter</span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<div className="spacer_block block-5"
														style="height:55px;line-height:55px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-6"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div className="spacer_block block-1"
														style="height:25px;line-height:25px;font-size:1px;"> </div>
													<table border="0" cellpadding="0" cellspacing="0"
														className="text_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td className="pad"
																style="padding-left:20px;padding-right:20px;padding-top:10px;">
																<div style="font-family: sans-serif">
																	<div className=""
																		style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; color: #191919; line-height: 1.5;">
																		<p
																			style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 42px;">
																			<span style="font-size:28px;"><strong><span
																						style="">Let's Get
																						Started</span></strong></span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="5" cellspacing="0"
														className="divider_block block-3" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td className="pad">
																<div align="center" className="alignment">
																	<table border="0" cellpadding="0" cellspacing="0"
																		role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																		width="15%">
																		<tr>
																			<td className="divider_inner"
																				style="font-size: 1px; line-height: 1px; border-top: 2px solid #FFD3E0;">
																				<span> </span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														className="divider_block block-4" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td className="pad">
																<div align="center" className="alignment">
																	<table border="0" cellpadding="0" cellspacing="0"
																		role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																		width="5%">
																		<tr>
																			<td className="divider_inner"
																				style="font-size: 1px; line-height: 1px; border-top: 2px solid #FFD3E0;">
																				<span> </span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-7"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #c7f1e6; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="66.66666666666667%">
													<div className="spacer_block block-1 mobile_hide"
														style="height:20px;line-height:20px;font-size:1px;"> </div>
													<table border="0" cellpadding="0" cellspacing="0"
														className="text_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td className="pad"
																style="padding-bottom:10px;padding-left:40px;padding-right:10px;">
																<div style="font-family: sans-serif">
																	<div className=""
																		style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 24px; color: #34495e; line-height: 2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 40px;">
																			<span style="font-size:20px;"><strong><span
																						style="">Our Best Selling
																						#Trending Saree at 60%
																						Discount</span></strong></span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														className="text_block block-3" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td className="pad"
																style="padding-bottom:10px;padding-left:40px;padding-right:30px;">
																<div style="font-family: sans-serif">
																	<div className=""
																		style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 24px; color: #555555; line-height: 2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 28px;">
																			Explore the wide range of saree collection
																			in our brand Vrati Creation.Wear this saree
																			with matching bangles and hills to look your
																			self bold and beautiful in any occasion like
																			wedding,party,evening,nightparty etc.</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														className="text_block block-4" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td className="pad"
																style="padding-bottom:10px;padding-left:45px;padding-right:10px;">
																<div style="font-family: sans-serif">
																	<div className=""
																		style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 24px; color: #71acb0; line-height: 2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 28px;">
																			<span style="font-size:14px;"><strong><span
																						style=""><span style=""><span
																								style="">Shop Now
																								→</span></span></span></strong></span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td className="column column-2"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="33.333333333333336%">
													<table border="0" cellpadding="0" cellspacing="0"
														className="image_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td className="pad"
																style="padding-right:45px;width:100%;padding-left:0px;">
																<div align="center" className="alignment"
																	style="line-height:10px"><img alt="I'm an image"
																		src="https://ci3.googleusercontent.com/proxy/do2A-rJbHGNRfIQz4_SmVwkaGQrYdOuHzaHRgygjP1UOzGDURHK3UuVqqb1yuL_w9BFWcQYYi5AUVWBEVGFB_hMj1SdLf56j-4lGvwqq6XIWyB0X__914l7PgFNKjot0cgQT7nmvREbCYYCFUYY2R-3TAy3XoQ=s0-d-e1-ft#https://d1b85f968a.imgdist.com/public/users/Integrators/BeeProAgency/977698_962337/1%20%283%29.jpeg"
																		style="display: block; height: auto; border: 0; width: 187px; max-width: 100%;"
																		title="I'm an image" width="187" /></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-8"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div className="spacer_block block-1"
														style="height:35px;line-height:35px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-9"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="33.333333333333336%">
													<table border="0" cellpadding="0" cellspacing="0"
														className="image_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td className="pad"
																style="padding-left:40px;width:100%;padding-right:0px;">
																<div align="center" className="alignment"
																	style="line-height:10px"><img alt="I'm an image"
																		src="https://ci5.googleusercontent.com/proxy/G5g24Wljz2WiMTLoEzNay7EmYHbjX4l6i2Cs3drErk-cvo9ZyDdNHdJhsrt_jumpWvU1_KT6iQMPmzWHIydahsArgT-pXVYqb1f3HOu9Low7JqQHOHNKKqB4mZ4EMkWX30iBLkBfGm6lGmxb=s0-d-e1-ft#https://d1b85f968a.imgdist.com/public/users/Integrators/BeeProAgency/977698_962337/1.jpeg"
																		style="display: block; height: auto; border: 0; width: 193px; max-width: 100%;"
																		title="I'm an image" width="193" /></div>
															</td>
														</tr>
													</table>
												</td>
												<td className="column column-2"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="66.66666666666667%">
													<table border="0" cellpadding="0" cellspacing="0"
														className="text_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td className="pad"
																style="padding-bottom:10px;padding-left:40px;padding-right:10px;">
																<div style="font-family: sans-serif">
																	<div className=""
																		style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 24px; color: #34495e; line-height: 2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 40px;">
																			<span style="font-size:20px;"><strong><span
																						style="">Our Best Selling #South
																						Kanjivaram Saree at 50% 😍
																						Discount</span></strong></span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														className="text_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td className="pad"
																style="padding-bottom:10px;padding-left:40px;padding-right:30px;">
																<div style="font-family: sans-serif">
																	<div className=""
																		style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 24px; color: #555555; line-height: 2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 28px;">
																			Our New Amazing Product You Look Very
																			Graceful Or Pretty. Thank you For Choosing
																			Our Brand Product To Wear. We Hope That You
																			Feel too much Better After Purchase Our
																			Product.</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														className="text_block block-3" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td className="pad"
																style="padding-bottom:10px;padding-left:40px;padding-right:10px;">
																<div style="font-family: sans-serif">
																	<div className=""
																		style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 24px; color: #71acb0; line-height: 2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 28px;">
																			<span style="font-size:14px;"><strong><span
																						style=""><span style=""><span
																								style="">Shop Now
																								→</span></span></span></strong></span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-10"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div className="spacer_block block-1"
														style="height:35px;line-height:35px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-11"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #c7f1e6; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="66.66666666666667%">
													<div className="spacer_block block-1 mobile_hide"
														style="height:20px;line-height:20px;font-size:1px;"> </div>
													<table border="0" cellpadding="0" cellspacing="0"
														className="text_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td className="pad"
																style="padding-bottom:10px;padding-left:40px;padding-right:10px;">
																<div style="font-family: sans-serif">
																	<div className=""
																		style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 24px; color: #34495e; line-height: 2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 40px;">
																			<span style="font-size:20px;"><strong><span
																						style="">Our Best Selling
																						Kanjivaram Saree at 44% 😍
																						Discount</span></strong></span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														className="text_block block-3" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td className="pad"
																style="padding-bottom:10px;padding-left:40px;padding-right:30px;">
																<div style="font-family: sans-serif">
																	<div className=""
																		style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 24px; color: #555555; line-height: 2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 28px;">
																			very nice addition to the wardrobe of every
																			fashionable female, who wants to look
																			Gorgeous and distinct. Shop From a Wide
																			Range Of Silk Saree</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														className="text_block block-4" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td className="pad"
																style="padding-bottom:10px;padding-left:40px;padding-right:10px;">
																<div style="font-family: sans-serif">
																	<div className=""
																		style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 24px; color: #71acb0; line-height: 2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 28px;">
																			<span style="font-size:14px;"><strong><span
																						style=""><span style=""><span
																								style="">Shop Now 
																								→</span></span></span></strong></span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td className="column column-2"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="33.333333333333336%">
													<table border="0" cellpadding="0" cellspacing="0"
														className="image_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td className="pad"
																style="padding-bottom:10px;padding-right:35px;width:100%;padding-left:0px;">
																<div align="center" className="alignment"
																	style="line-height:10px"><img alt="I'm an image"
																		src="https://ci4.googleusercontent.com/proxy/ecTnw7lTyqli6cvaj20LVXFrNnf5GStIZDJMofWNToQT5F0fEC7Z8_SUqk654G63STjNMLKsTNEeOQMNQ7pbsjR7uhbkkoTo49Tv5zP9htkKVl7L54-2TxjJWuMvbuHKFla3IyienKI1RhGu4CV9BnQKGk5hYA=s0-d-e1-ft#https://d1b85f968a.imgdist.com/public/users/Integrators/BeeProAgency/977698_962337/1%20%282%29.jpeg"
																		style="display: block; height: auto; border: 0; width: 198px; max-width: 100%;"
																		title="I'm an image" width="198" /></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-12"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div className="spacer_block block-1"
														style="height:20px;line-height:20px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-13"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														className="image_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td className="pad"
																style="width:100%;padding-right:0px;padding-left:0px;">
																<div align="center" className="alignment"
																	style="line-height:10px"><img alt="Alternate text"
																		className="big" src="https://ci3.googleusercontent.com/proxy/XgC7vnVpYo9RyaGPKGiZlq8Q7W2Jc1bLcYw815jP3-wLtVZidYch0xuwL9JSzF6sPiHQHIGrbSZrp3S2a1nowshZjB_cj1OLWoOZ5CltyCuAsCBgWKvbFZH6jF7AfQ=s0-d-e1-ft#https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1561/white_down.png"
																		style="display: block; height: auto; border: 0; width: 700px; max-width: 100%;"
																		title="Alternate text" width="700" /></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-14"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div className="spacer_block block-1"
														style="height:20px;line-height:20px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-15"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #71acb0; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div className="spacer_block block-1"
														style="height:40px;line-height:40px;font-size:1px;"> </div>
													<table border="0" cellpadding="10" cellspacing="0"
														className="social_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td className="pad">
																<div align="center" className="alignment">
																	<table border="0" cellpadding="0" cellspacing="0"
																		className="social-table" role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;"
																		width="230px">
																		<tr>
																			<td style="padding:0 7px 0 7px;"><a
																					href="https://www.facebook.com/"
																					target="_blank"><img alt="Facebook"
																						height="32"
																						src="https://ci5.googleusercontent.com/proxy/m7Yuay2vrTwWx3FJdD2FGXg6_Cd1ozUzozlJLkLmbD9R-dM1z7nP9tBllmRkRuGDdVZpf-9eknc3G5PLIHihJjzfCOz3hkwZIbiA3KylcvcTIZHeRe8nVkGeYTiGEognH3Ou4brOzbs8-2L6O5c12hqYjx0aQAjI5JFcqMwoT3DQDgE=s0-d-e1-ft#https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-dark-gray/facebook@2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="Facebook"
																						width="32" /></a></td>
																			<td style="padding:0 7px 0 7px;"><a
																					href="https://twitter.com/"
																					target="_blank"><img alt="Twitter"
																						height="32"
																						src="https://ci4.googleusercontent.com/proxy/Vvl3wmrCX5qsCC2VvkafQZ4LxxEk3zckgHj12OI8XedCCdirvDNhJJP1aMUvE-tb6GDErX3zyCNDed4SgEB2yfYedWt-IBPmtwczXpYuTEJzk77-9TdELq490Yub31Lr33SgLWt-hPaEzqnKsxb5fBEkDViqOq0_0f_EXBHk3inFOQ=s0-d-e1-ft#https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-dark-gray/twitter@2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="Twitter"
																						width="32" /></a></td>
																			<td style="padding:0 7px 0 7px;"><a
																					href="https://instagram.com/"
																					target="_blank"><img alt="Instagram"
																						height="32"
																						src="https://ci3.googleusercontent.com/proxy/hSHFdUdw5muHczv4EejlJlbKcHzKo36RIWCEKoKJilBKWXkP4ZulAK1nrUMxigjrx_3qidurEXmDO0HJTAZUw28vpEefzn0YHtv9QbyznQUe6xFqdYGKvwUhbhPMd_4BabvPXqFHR7WjOP2V5sEc4TklOdp9zo81OGwkQV9380Iah-W0=s0-d-e1-ft#https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-dark-gray/instagram@2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="Instagram"
																						width="32" /></a></td>
																			<td style="padding:0 7px 0 7px;"><a
																					href="https://www.linkedin.com/"
																					target="_blank"><img alt="LinkedIn"
																						height="32"
																						src="https://ci3.googleusercontent.com/proxy/gtfUEzsoSDhhkGXgW1uxzDKA5E6qZlGLNyBOQpweT6xTXQr-43pe9_AwY6jMEiL7vM0T70dNAtuTmVwzZSPcrYGtIvfZWZsCkOuSHsT51Ncv58xOGitw3VijCTub2v0OO2APZ54TweASYAC-wqFXOfmKlBjS1qaZRVkQUCJzPdt-qb4=s0-d-e1-ft#https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-dark-gray/linkedin@2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="LinkedIn"
																						width="32" /></a></td>
																			<td style="padding:0 7px 0 7px;"><a href=""
																					target="_blank"><img alt="YouTube"
																						height="32"
																						src="https://ci6.googleusercontent.com/proxy/uAnQ7cFqLvU29mgQxp3oTpEWf6-dzTIAvbNPgqCfdHaXCIwfXWYafzCZ_rCum1dr9ZVeNtSOEMasMww2QW6GsxPkCb673Ye3WoE6Al9AKRcYldWh2evj9oOWTmiBq8CW6Qf0gep9g8XL_ZrUk1dtV1b5jxM81J74dLvRinpwATAX9Q=s0-d-e1-ft#https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-dark-gray/youtube@2x.png"
																						style="display: block; height: auto; border: 0;"
																						title="YouTube"
																						width="32" /></a></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<div className="spacer_block block-3"
														style="height:25px;line-height:25px;font-size:1px;"> </div>
													<table border="0" cellpadding="0" cellspacing="0"
														className="text_block block-4" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td className="pad"
																style="padding-bottom:10px;padding-left:40px;padding-right:40px;">
																<div style="font-family: sans-serif">
																	<div className=""
																		style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 24px; color: #555555; line-height: 2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 28px;">
																			If you have any questions, feel free message
																			us at suppport.bestbuy@gmail.com. All right
																			reserved. Update <a href="#" rel="noopener"
																				style="text-decoration: none; color: #555555;"
																				target="_blank">email preferences</a> or
																			<a href="#" rel="noopener"
																				style="text-decoration: none; color: #555555;"
																				target="_blank">unsubscribe</a>.</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														className="text_block block-5" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td className="pad"
																style="padding-bottom:10px;padding-left:40px;padding-right:40px;">
																<div style="font-family: sans-serif">
																	<div className=""
																		style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 24px; color: #555555; line-height: 2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 28px;">
																			texaxity hub, Motavarachha, Surat, INDIA</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-16"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #71acb0; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="10" cellspacing="0"
														className="text_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td className="pad">
																<div style="font-family: sans-serif">
																	<div className=""
																		style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
																		<p
																			style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 14.399999999999999px;">
																			<span style="color:#555555;">Terms of use
																				<strong>|</strong> Privacy Policy</span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-17"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														className="image_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td className="pad"
																style="width:100%;padding-right:0px;padding-left:0px;">
																<div align="center" className="alignment"
																	style="line-height:10px"><img alt="Alternate text"
																		className="big" src="https://ci3.googleusercontent.com/proxy/XgC7vnVpYo9RyaGPKGiZlq8Q7W2Jc1bLcYw815jP3-wLtVZidYch0xuwL9JSzF6sPiHQHIGrbSZrp3S2a1nowshZjB_cj1OLWoOZ5CltyCuAsCBgWKvbFZH6jF7AfQ=s0-d-e1-ft#https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1561/white_down.png"
																		style="display: block; height: auto; border: 0; width: 700px; max-width: 100%;"
																		title="Alternate text" width="700" /></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" className="row row-18"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										className="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px;"
										width="700">
										<tbody>
											<tr>
												<td className="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div className="spacer_block block-1"
														style="height:25px;line-height:25px;font-size:1px;"> </div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
</body>

</html>
    `,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: "You Should receive mail from us",
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
};
