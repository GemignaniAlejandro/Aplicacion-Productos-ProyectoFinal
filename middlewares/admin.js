let esAdmin = true;

let esAdminMiddle = (req, res, next) => 
{
    if(esAdmin)
    {
        next();
    }
    else
    {
        res.json({error: -1, descripcion: "ruta no autorizada"});
    }
}

module.exports = esAdminMiddle;