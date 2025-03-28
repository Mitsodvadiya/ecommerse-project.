import { FormHelperText, Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { selectWishlistItems } from '../../wishlist/WishlistSlice';
import { selectLoggedInUser } from '../../auth/AuthSlice';
import { addToCartAsync, selectCartItems } from '../../cart/CartSlice';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

export const ProductCard = ({ id, title, price, thumbnail, gender, stockQuantity, handleAddRemoveFromWishlist, isWishlistCard, isAdminCard }) => {
  const navigate = useNavigate();
  const wishlistItems = useSelector(selectWishlistItems);
  const loggedInUser = useSelector(selectLoggedInUser);
  const cartItems = useSelector(selectCartItems);
  const theme = useTheme();

  const is1410 = useMediaQuery(theme.breakpoints.down(1410));
  const is932 = useMediaQuery(theme.breakpoints.down(932));
  const is752 = useMediaQuery(theme.breakpoints.down(752));
  const is608 = useMediaQuery(theme.breakpoints.down(608));
  const is488 = useMediaQuery(theme.breakpoints.down(488));
  const is408 = useMediaQuery(theme.breakpoints.down(408));

  const isProductAlreadyInWishlist = wishlistItems.some(item => item.product._id === id);
  const isProductAlreadyInCart = cartItems.some(item => item.product._id === id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!loggedInUser) {
      navigate('/login');
      return;
    }
    navigate(`/product-details/${id}`)
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    if (!loggedInUser) {
      toast.info("Please login to manage your wishlist.");
      return;
    }
    handleAddRemoveFromWishlist(e, id);
  };

  return (
    <>
      <Stack
        component={isAdminCard || isWishlistCard || is408 ? '' : Paper}
        mt={is408 ? 2 : 0}
        elevation={1}
        p={2}
        width={is408 ? 'auto' : is488 ? '200px' : is608 ? '240px' : is752 ? '300px' : is932 ? '240px' : is1410 ? '300px' : '340px'}
        sx={{ cursor: 'pointer' }}
        onClick={(e) =>{
            e.stopPropagation();
             navigate(`/product-details/${id}`)
            }}
      >
        <Stack>
          <img src={thumbnail} alt={`${title} photo unavailable`} width="100%" height="100%" style={{ aspectRatio: 1 / 1, objectFit: 'contain' }} />
        </Stack>

        <Stack flex={2} justifyContent={'flex-end'} spacing={1} rowGap={2}>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography variant='h6' fontWeight={400}>{title}</Typography>
            {!isAdminCard && (
              <motion.div whileHover={{ scale: 1.3, y: -10, zIndex: 100 }} whileTap={{ scale: 1 }} transition={{ duration: 0.4, type: 'spring' }}>
                <Checkbox
                  checked={isProductAlreadyInWishlist}
                  onChange={handleWishlistToggle}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: 'red' }} />}
                />
              </motion.div>
            )}
          </Stack>
          <Typography color='text.secondary'>{gender}</Typography>

          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Typography>₹{price}</Typography>
            {!isWishlistCard && !isProductAlreadyInCart && !isAdminCard && (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                onClick={handleAddToCart}
                style={{ padding: '10px 15px', borderRadius: '3px', backgroundColor: 'black', color: 'white', cursor: 'pointer' }}
              >
                Add To Cart
              </motion.button>
            )}
          </Stack>

          {stockQuantity <= 20 && (
            <FormHelperText sx={{ fontSize: '.9rem' }} error>
              {stockQuantity === 1 ? 'Only 1 stock is left' : 'Only few are left'}
            </FormHelperText>
          )}
        </Stack>
      </Stack>
    </>
  );
};
