import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { getProductById } from 'apis/shopItem.api';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { Product } from 'interfaces/shopItem.interface';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Routes } from 'Router';
import ItemDetailsText from './components/ItemDetailsText';
import { ImageGalleryProvider } from '../../components/ImageGallery/useImageGallery';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      width: '100%',
      padding: theme.spacing(4, 0),
      '&>*': {},
    },
    imageGalleryContainer: {},
    formItem: {},
    detailsContainer: {
      display: 'flex',
      flexDirection: 'column',
      '&>*': {
        marginBottom: theme.spacing(1),
      },
    },
  })
);

const ItemDetailsPage = () => {
  const classes = useStyles();
  const { id = '' } = useParams<{ id: string }>();
  const history = useHistory();
  const [item, setItem] = useState<Product | undefined>(undefined);

  React.useEffect(() => {
    if (id === '') return history.push(Routes.Homepage);
    getProductById(id).then((itemData) => {
      if (itemData) setItem(itemData);
    });
  }, [id, setItem, history]);

  if (!item) {
    return <div></div>;
  }

  return (
    <ImageGalleryProvider item={item}>
      <Grid container item spacing={1} className={classes.container}>
        <Grid item sm={5} xs={12} className={classes.imageGalleryContainer}>
          <ImageGallery />
        </Grid>
        <Grid item sm={7} xs={12} className={classes.detailsContainer}>
          <ItemDetailsText />
        </Grid>
      </Grid>
    </ImageGalleryProvider>
  );
};

export default ItemDetailsPage;
