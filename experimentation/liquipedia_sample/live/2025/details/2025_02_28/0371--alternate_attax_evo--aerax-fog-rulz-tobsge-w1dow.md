### Roster Details<br />
Team Name: ALTERNATE aTTaX Evo<br />
Roster: aerax, FoG, Rulz, Tobsge, w1dow<br />
Global Rank: [371](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [237]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  622.7<br />
<br />
Final Rank Value (622.7) = Starting Rank Value (621.5) + Head To Head Adjustments (1.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.107<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 621.5
- 400 + ( ( 0.107 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 621.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |     2303 | 2024-11-30 | Eternal premium          | L   | 0.600      | -            | -                | -                | -         |    -7.83 | aerax, FoG, Rulz, Tobsge, w1dow  |
|           28 |     2517 | 2024-11-26 | SkyFury                  | L   | 0.573      | -            | -                | -                | -         |    -7.57 | aerax, FoG, Rulz, Tobsge, w1dow  |
|           27 |     3431 | 2024-11-10 | Reveal (German team)     | L   | 0.466      | -            | -                | -                | -         |    -7.12 | aerax, FoG, Rulz, Tobsge, w1dow  |
|           26 |     3481 | 2024-11-09 | Team Fragster            | W   | 0.460      | 0.143        | 0.000 (0.000)    | 0.109 (0.007)    | 0 (0.000) |     6.85 | aerax, FoG, Rulz, Tobsge, w1dow  |
|           25 |     3755 | 2024-11-04 | AKA HERO                 | W   | 0.427      | 0.143        | 0.000 (0.000)    | 0.068 (0.004)    | 0 (0.000) |     6.03 | devils, FoG, Rulz, Tobsge, w1dow |
|           24 |     3818 | 2024-11-03 | RIZON                    | W   | 0.420      | -            | -                | -                | 0 (0.000) |     2.68 | devils, FoG, Rulz, Tobsge, w1dow |
|           23 |     4234 | 2024-10-27 | BIG SELECTA              | W   | 0.373      | 0.143        | 0.000 (0.000)    | 0.054 (0.003)    | 0 (0.000) |     5.00 | devils, FoG, Rulz, Tobsge, w1dow |
|           22 |     4427 | 2024-10-23 | Team Fragster            | W   | 0.346      | 0.143        | 0.000 (0.000)    | 0.109 (0.005)    | 0 (0.000) |     5.28 | devils, FoG, Rulz, Tobsge, w1dow |
|           21 |     4500 | 2024-10-21 | Sissi State Punks        | L   | 0.333      | -            | -                | -                | -         |    -5.43 | devils, FoG, Rulz, smaxy, w1dow  |
|           20 |     4545 | 2024-10-20 | Wave Esports             | L   | 0.326      | -            | -                | -                | -         |    -5.04 | devils, FoG, Rulz, smaxy, w1dow  |
|           19 |     4621 | 2024-10-19 | 777 Esports              | L   | 0.319      | -            | -                | -                | -         |    -4.37 | aerax, FoG, Rulz, Tobsge, w1dow  |
|           18 |     4671 | 2024-10-18 | Ex-Dynamo Eclot Thunders | W   | 0.312      | 0.278        | 0.000 (0.000)    | 0.029 (0.002)    | 0 (0.000) |     4.64 | aerax, FoG, Rulz, Tobsge, w1dow  |
|           17 |     4677 | 2024-10-18 | UNEVEN                   | W   | 0.312      | -            | -                | -                | 0 (0.000) |     2.85 | devils, FoG, Rulz, Tobsge, w1dow |
|           16 |     4721 | 2024-10-17 | 777 Esports              | L   | 0.305      | -            | -                | -                | -         |    -4.19 | aerax, FoG, Rulz, Tobsge, w1dow  |
|           15 |     4775 | 2024-10-16 | Reveal (German team)     | L   | 0.299      | -            | -                | -                | -         |    -4.51 | devils, FoG, Rulz, smaxy, w1dow  |
|           14 |     4838 | 2024-10-15 | XI Esport                | W   | 0.292      | 0.278        | -                | 0.138 (0.011)    | 0 (0.000) |     3.27 | aerax, FoG, Rulz, Tobsge, w1dow  |
|           13 |     4924 | 2024-10-13 | KUUSAMO.gg               | W   | 0.278      | 0.278        | -                | 0.177 (0.014)    | 0 (0.000) |     3.07 | aerax, FoG, Rulz, Tobsge, w1dow  |
|           12 |     5037 | 2024-10-11 | Reveal (German team)     | L   | 0.266      | -            | -                | -                | -         |    -4.03 | devils, FoG, Rulz, Tobsge, w1dow |
|           11 |     5125 | 2024-10-09 | MYinsanity               | L   | 0.252      | -            | -                | -                | -         |    -3.64 | devils, FoG, Rulz, smaxy, w1dow  |
|           10 |     5132 | 2024-10-09 | Team Czech Republic      | W   | 0.252      | 0.278        | 0.000 (0.000)    | 0.101 (0.007)    | 0 (0.000) |     5.27 | aerax, FoG, Rulz, Tobsge, w1dow  |
|            9 |     5447 | 2024-10-04 | Sampi NEXT               | W   | 0.219      | 0.278        | -                | 0.027 (0.002)    | -         |     2.27 | aerax, FoG, Rulz, Tobsge, w1dow  |
|            8 |     5912 | 2024-09-27 | Entropy Gaming           | W   | 0.172      | 0.143        | 0.000 (0.000)    | 0.056 (0.001)    | -         |     2.38 | devils, FoG, Rulz, Smaxy, w1dow  |
|            7 |     6070 | 2024-09-25 | Playing Ducks            | W   | 0.160      | -            | -                | -                | -         |     1.10 | devils, FoG, Rulz, Tobsge, w1dow |
|            6 |     6301 | 2024-09-22 | Team NinjaParentz        | W   | 0.139      | 0.143        | 0.000 (0.000)    | -                | -         |     1.90 | devils, FoG, Rulz, Smaxy, w1dow  |
|            5 |     6476 | 2024-09-19 | SNOGARD Dragons          | W   | 0.119      | 0.143        | 0.000 (0.000)    | -                | -         |     1.78 | devils, FoG, Rulz, Tobsge, w1dow |
|            4 |     6872 | 2024-09-13 | Unorganized Five         | W   | 0.079      | 0.143        | 0.000 (0.000)    | -                | -         |     1.11 | devils, FoG, Rulz, Smaxy, w1dow  |
|            3 |     7187 | 2024-09-07 | GOOFYBOYZ                | L   | 0.039      | -            | -                | -                | -         |    -0.35 | devils, FoG, Rulz, Smaxy, w1dow  |
|            2 |     7359 | 2024-09-05 | The Suspect              | L   | 0.026      | -            | -                | -                | -         |    -0.27 | devils, FoG, Rulz, Smaxy, w1dow  |
|            1 |     7505 | 2024-09-03 | Ex-DOSKI                 | W   | 0.013      | -            | -                | -                | -         |     0.09 | devils, FoG, Rulz, Smaxy, w1dow  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($351.74)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-10 |      0.466 | $241.26        | $112.48         |
| 2024-10-19 |      0.319 | $750.00        | $239.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
