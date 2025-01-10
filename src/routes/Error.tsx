import { Link, useNavigate } from 'react-router';
// import useTitle from '@/hooks';

export default function RouteError() {
//   useTitle('Error');

  const navigate = useNavigate();

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 px-3">
      <div className="text-center row">
        <div className=" col-md-6">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className=" col-md-6 mt-5">
          <p className="fs-3">
            {' '}
            <span className="text-danger">Opps! Page not found.</span>
          </p>
          <p className="lead">Sorry, an unexpected error has occurred.</p>
          <Link
            className="btn btn-primary"
            to={(navigate(-1) as unknown as string) || '/'}
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
