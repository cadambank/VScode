const express = require('express');
const router = express.Router();
const sql = require('mssql');

module.exports = router;

const addInvoice = async (Kunnr
,CustomerName
,DocumentType
,DocumentDate
,DocumentNumber
,ItemNumber
,Material
,MaterialDescriptio
,Quantity
,Uom
,Slocation
,NetValue
,Currency
,Division
,Plant
,Katr6
,City
,Region
,Total
,TotalCurrency
,Tax
,TaxCurrency) => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(process.env.DATABASE_URL2)
        const result = await sql.query`insert into bajaj_client.dbo.primary_invoices(Kunnr
                                        ,CustomerName
                                        ,DocumentType
                                        ,DocumentDate
                                        ,DocumentNumber
                                        ,ItemNumber
                                        ,Material
                                        ,MaterialDescriptio
                                        ,Quantity
                                        ,Uom
                                        ,Slocation
                                        ,NetValue
                                        ,Currency
                                        ,Division
                                        ,Plant
                                        ,Katr6
                                        ,City
                                        ,Region
                                        ,Total
                                        ,TotalCurrency
                                        ,Tax
                                        ,TaxCurrency)
                                        values(
                                        ${Kunnr},
                                        ${CustomerName},
                                        ${DocumentType},
                                        ${DocumentDate},
                                        ${DocumentNumber},
                                        ${ItemNumber},
                                        ${Material},
                                        ${MaterialDescriptio},
                                        ${Quantity},
                                        ${Uom},
                                        ${Slocation},
                                        ${NetValue},
                                        ${Currency},
                                        ${Division},
                                        ${Plant},
                                        ${Katr6},
                                        ${City},
                                        ${Region},
                                        ${Total},
                                        ${TotalCurrency},
                                        ${Tax},
                                        ${TaxCurrency}
                                        )`;
        return result
    } catch (err) {
        console.log(err)
    }
}

const p = async() => {

}

router.post('/',async (req,res)=>{
    let	Kunnr	=	req.body.Kunnr
    let	CustomerName	=	req.body.CustomerName
    let	DocumentType	=	req.body.DocumentType
    let	DocumentDate	=	req.body.DocumentDate
    let	DocumentNumber	=	req.body.DocumentNumber
    let	ItemNumber	=	req.body.ItemNumber
    let	Material	=	req.body.Material
    let	MaterialDescriptio	=	req.body.MaterialDescriptio
    let	Quantity	=	req.body.Quantity
    let	Uom	=	req.body.Uom
    let	Slocation	=	req.body.Slocation
    let	NetValue	=	req.body.NetValue
    let	Currency	=	req.body.Currency
    let	Division	=	req.body.Division
    let	Plant	=	req.body.Plant
    let	Katr6	=	req.body.Katr6
    let	City	=	req.body.City
    let	Region	=	req.body.Region
    let	Total	=	req.body.Total
    let	TotalCurrency	=	req.body.TotalCurrency
    let	Tax	=	req.body.Tax
    let	TaxCurrency	=	req.body.TaxCurrency

    try {
        // const newSubscriber = await subscriber.save();
        const newRow = await addInvoice(Kunnr
,CustomerName
,DocumentType
,DocumentDate
,DocumentNumber
,ItemNumber
,Material
,MaterialDescriptio
,Quantity
,Uom
,Slocation
,NetValue
,Currency
,Division
,Plant
,Katr6
,City
,Region
,Total
,TotalCurrency
,Tax
,TaxCurrency);
        res.status(201).json({message:"New Record Inserted"});
    } catch (error){
        res.status(400).json({message:error.message});
    }
})