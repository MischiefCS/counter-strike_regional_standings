### Roster Details<br />
Team Name: Betera Esports<br />
Roster: El1an, MaSvAl, OWNER, sh1nejezzz, tENZY<br />
Global Rank: [218](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [128]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  602.6<br />
<br />
Final Rank Value (602.6) = Starting Rank Value (613.3) + Head To Head Adjustments (-10.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.249[<sup>1</sup>](#table2)
- Bounty Collected: 0.189[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 613.3
- 400 + ( ( 0.110 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 613.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      801 | 2024-12-19 | Monte                  | L   | 0.720      | -            | -                | -                | -         |    -5.02 | El1an, MaSvAl, OWNER, sh1nejezzz, tENZY    |
|            7 |      844 | 2024-12-15 | FAVBET Team            | L   | 0.694      | -            | -                | -                | -         |    -5.49 | El1an, MaSvAl, OWNER, sh1nejezzz, supra    |
|            6 |      868 | 2024-12-14 | JiJieHao               | W   | 0.687      | 0.143        | 0.000 (0.000)    | 0.261 (0.026)    | 0 (0.000) |    12.12 | El1an, MaSvAl, OWNER, sh1nejezzz, supra    |
|            5 |      895 | 2024-12-13 | Fire Flux Esports      | L   | 0.680      | -            | -                | -                | -         |    -4.53 | El1an, MaSvAl, OWNER, sh1nejezzz, supra    |
|            4 |     1112 | 2024-12-02 | FLuffy Gangsters       | L   | 0.606      | -            | -                | -                | -         |    -7.00 | El1an, MaSvAl, OWNER, sh1nejezzz, tENZY    |
|            3 |     2276 | 2024-10-02 | Betclic Apogee Esports | L   | 0.200      | -            | -                | -                | -         |    -2.46 | El1an, MaSvAl, OWNER, sh1nejezzz, tripex17 |
|            2 |     2944 | 2024-09-12 | Rebels Gaming          | W   | 0.066      | 0.500        | 0.009 (0.000)    | 0.318 (0.011)    | 0 (0.000) |     1.32 | El1an, MaSvAl, OWNER, sh1nejezzz, tripex17 |
|            1 |     3147 | 2024-09-05 | EYEBALLERS             | W   | 0.019      | 0.500        | 0.019 (0.000)    | 0.360 (0.003)    | 0 (0.000) |     0.42 | El1an, MaSvAl, OWNER, sh1nejezzz, tripex17 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($318.89)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.319 | $1,000.00      | $318.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
