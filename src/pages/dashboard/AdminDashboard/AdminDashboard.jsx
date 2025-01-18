import Loading from '../../../components/reusuable/Loading';
import { Helmet } from 'react-helmet-async';
import Title from '../../../components/reusuable/Title';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosWithCredentials from '../../../hooks/useAxiosWithCredentials';
import Chart from './parts/Chart';
import { BsArrow90DegLeft } from 'react-icons/bs';
import { useEffect } from 'react';
import CountUp from 'react-countup';
import { FaRegAddressCard } from 'react-icons/fa';
import { IoIosPerson } from 'react-icons/io';
import { IoWoman } from 'react-icons/io5';
import { TbReportMoney } from 'react-icons/tb';
import { MdWorkspacePremium } from 'react-icons/md';
import { Fade } from 'react-awesome-reveal';

const cardCss = "flex items-center gap-4 py-5 border border-line rounded-md bg-element px-5";

const AdminDashboard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { email, displayName } = useAuth();
    const axiosWithCredentials = useAxiosWithCredentials();
    const { data: stats = {}, isPending: loading } = useQuery({
        queryKey: ['admin-stats-', email],
        queryFn: async () => {
            const res = await axiosWithCredentials('/admin-stats');
            return res.data;
        }
    })

    return (<section>
        <Loading loading={loading} />
        <Helmet>
            <title>Admin Dashboard || Life Mate</title>
        </Helmet>

        <Title title={`Welcome ${displayName} (Admin)`} />

        <p className='text-center flex-wrap text-lg text-text mb-3 flex items-center gap-2 justify-center mt-10'>
            Click the <span className='inline-flex items-center gap-2 text-primary font-semibold'>
                <BsArrow90DegLeft className='text-2xl' />
                Top-Left
            </span> icon for page navigation
        </p>

        {loading ? null : <Fade>
            <div className='max-w-sm mx-auto sm:max-w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 text-primary font-semibold mt-5'>
                <div className={cardCss}>
                    <span className='text-5xl'>
                        <FaRegAddressCard />
                    </span>

                    <div>
                        <p className='text-3xl '>
                            <CountUp duration={2} end={stats?.totalBiodata} />
                        </p>
                        <p>Biodatas</p>
                    </div>
                </div>

                <div className={cardCss}>
                    <span className='text-5xl'>
                        <IoIosPerson />
                    </span>

                    <div>
                        <p className='text-3xl'>
                            <CountUp duration={2} end={stats?.maleBiodata} />
                        </p>
                        <p>Male Biodatas</p>
                    </div>
                </div>

                <div className={cardCss}>
                    <span className='text-5xl'>
                        <IoWoman />
                    </span>

                    <div>
                        <p className='text-3xl'>
                            <CountUp duration={2} end={stats?.femaleBiodata} />
                        </p>
                        <p>Female Biodatas</p>
                    </div>
                </div>

                <div className={cardCss}>
                    <span className='text-5xl'>
                        <MdWorkspacePremium />
                    </span>

                    <div>
                        <p className='text-3xl'>
                            <CountUp duration={2} end={stats?.premiumBiodata} />
                        </p>
                        <p>Premium Biodatas</p>
                    </div>
                </div>

                <div className={cardCss}>
                    <span className='text-5xl'>
                        <TbReportMoney />
                    </span>

                    <div>
                        <p className='text-3xl'>
                            $<CountUp duration={2} end={stats?.totalRevenue} />
                        </p>
                        <p>Total Revenue</p>
                    </div>
                </div>
            </div>
            <Chart stat={stats} />
        </Fade>}
    </section>);
};

export default AdminDashboard;