### Roster Details<br />
Team Name: MANTRA<br />
Roster: cheeseball, cookie, rekonz, SkulL, Winnieeeee<br />
Global Rank: [98](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [20]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  397.2<br />
<br />
Final Rank Value (397.2) = Starting Rank Value (400.1) + Head To Head Adjustments (-2.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.1
- 400 + ( ( 0.000 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 400.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |       36 | 2025-02-25 | KZG                  | L   | 0.133      | -            | -                | -                | -         |    -2.10 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            5 |       54 | 2025-02-24 | Rooster              | W   | 0.127      | 0.143        | 0.000 (0.000)    | 0.117 (0.002)    | 0 (0.000) |     2.00 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            4 |       74 | 2025-02-23 | TALON                | L   | 0.121      | -            | -                | -                | -         |    -1.89 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            3 |      218 | 2025-02-15 | Justice For Tomorrow | L   | 0.069      | -            | -                | -                | -         |    -1.08 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            2 |      221 | 2025-02-15 | BBBCBMBS             | W   | 0.068      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.07 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |
|            1 |      257 | 2025-02-14 | Vantage Esports      | L   | 0.060      | -            | -                | -                | -         |    -0.95 | cheeseball, cookie, rekonz, SkulL, Winnieeeee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
