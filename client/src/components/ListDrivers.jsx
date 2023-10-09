import Card from "./Card";

export default function ListaConductores({ drivers }) {
  return (
    <div className="card-container">
      {drivers.map((driver) => (
        <Card
          key={driver?.id}
          id={driver?.id}
          forename={driver?.name?.forename || driver?.forename}
          surname={driver?.name?.surname}
          driverRef={driver?.driverRef}
          number={driver?.number}
          image={driver?.image.url}
          imageBy={driver?.image.imageBy}
          dob={driver?.dob}
          nationality={driver?.nationality}
          url={driver?.url}
          team={driver?.teams || driver.Teams?.map((team) => team.name).join(",")}
        />
      ))}
    </div>
  );
}
