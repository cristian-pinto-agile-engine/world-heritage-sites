import React, { useEffect, useState } from "react";
import useFilterContext from "../../hooks/useFilterContext.ts";
import {
    Box,
    Typography,
    Stack,
    Card,
    CardContent,
    Divider,
    CircularProgress
} from "@mui/material";
import MapView from "../MapView/MapView.tsx"
import { fetchSite } from "../../api/endpoints.ts";
import { useParams } from "react-router-dom";

function SiteDetails() {
    const { siteDetail, setSiteDetail, loading, setLoading } = useFilterContext();
    const { id } = useParams<{ id: string }>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadSite = async () => {
            try {
                if (id) {
                    setLoading(true);
                    setError(null);
                    const data = await fetchSite(id);
                    setSiteDetail(data[0]);
                }
            } catch (error) {
                console.error("Error fetching site:", error);
                setError("An error occurred while fetching site details. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        loadSite();
    }, []);

    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography variant="h6" color="error">
                    {error}
                </Typography>
            </Box>
        );
    }

    if (loading || !siteDetail) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ padding: 3, maxWidth: "800px", margin: "0 auto" }}>
            <Card elevation={3}>
                <Box sx={{ backgroundColor: "success.main", color: "white", padding: 2 }}>
                    {siteDetail?.name_en && (
                        <Typography variant="h4" component="h2" gutterBottom>
                            {siteDetail.name_en}
                        </Typography>
                    )}

                    {(siteDetail?.name_fr || siteDetail?.name_es) && (
                        <Typography variant="subtitle1" color="inherit" gutterBottom>
                            {siteDetail?.name_fr || ""} {siteDetail?.name_es ? `| ${siteDetail?.name_es}` : ""}
                        </Typography>
                    )}
                </Box>

                <CardContent>
                    <Divider sx={{ my: 2 }} />

                    <Stack spacing={2}>
                        {(siteDetail?.states_name_en || siteDetail?.region_en) && (
                            <Box display="flex" alignItems="center" gap={1}>
                                <Typography variant="body1">
                                    <strong>Location:</strong> {siteDetail?.states_name_en || "Unknown"} {siteDetail.region_en ? `(${siteDetail.region_en})` : ""}
                                </Typography>
                            </Box>
                        )}

                        {(siteDetail?.latitude || siteDetail?.longitude) && (
                            <>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <Typography variant="body1">
                                        <strong>Coordinates:</strong> {siteDetail.latitude || "N/A"}, {siteDetail.longitude || "N/A"}
                                    </Typography>
                                </Box>

                                <Box display="flex" alignItems="center" gap={1}>
                                    <MapView latitude={siteDetail.latitude} longitude={siteDetail.longitude} />
                                </Box>
                            </>
                        )}
                    </Stack>

                    <Divider sx={{ my: 2 }} />

                    {siteDetail?.short_description_en && (
                        <>
                            <Typography variant="h6" gutterBottom>
                                Description
                            </Typography>
                            <Typography
                                variant="body2"
                                dangerouslySetInnerHTML={{
                                    __html: siteDetail.short_description_en,
                                }}
                            />
                            <Divider sx={{ my: 2 }} />
                        </>
                    )}

                    {siteDetail?.region_en && (
                        <>
                            <Typography variant="h6" gutterBottom>
                                Region
                            </Typography>
                            <Box display="flex" flexWrap="wrap" gap={1}>
                                <Typography variant="body2">{siteDetail.region_en}</Typography>
                            </Box>
                            <Divider sx={{ my: 2 }} />
                        </>
                    )}

                    {siteDetail?.justification_en && (
                        <>
                            <Typography variant="h6" gutterBottom>
                                Justification
                            </Typography>
                            <Typography
                                variant="body2"
                                dangerouslySetInnerHTML={{
                                    __html: siteDetail.justification_en,
                                }}
                            />
                            <Divider sx={{ my: 2 }} />
                        </>
                    )}

                    <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                        {siteDetail?.date_inscribed && (
                            <Typography variant="body2">
                                <strong>Inscribed:</strong> {siteDetail.date_inscribed}
                            </Typography>
                        )}

                        {siteDetail?.danger === 1 && siteDetail.danger_list && (
                            <Typography variant="body2" color="error">
                                <strong>On Danger List</strong>
                            </Typography>
                        )}

                        {siteDetail?.area_hectares && (
                            <Typography variant="body2">
                                <strong>Area:</strong> {siteDetail.area_hectares} hectares
                            </Typography>
                        )}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default SiteDetails;
