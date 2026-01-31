import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.DB_URL, process.env.DB_SECRET);

export let getUserData = async (user_id) => {
  try {
    const { data, error } = await supabase
      .from("spotify_users")
      .select()
      .eq("id", user_id)
      .single();

    if (error) {
      console.error(error);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

export let udpateAccessToken = async (
  user_id,
  access_token,
  access_expires,
) => {
  try {
    const { data, error } = await supabase
      .from("spotify_users")
      .update({
        access_token: access_token,
        access_expires: String(access_expires),
      })
      .eq("id", user_id)
      .select();
    if (error) {
      console.error(error);
    }
    console.log(`DB updated: ${data}`);
  } catch (error) {}
};

// console.log(await getUserData(1));
