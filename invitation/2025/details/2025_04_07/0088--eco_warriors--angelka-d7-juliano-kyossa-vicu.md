### Roster Details<br />
Team Name: Eco Warriors<br />
Roster: Angelka, D7, juliano, kyossa, vicu<br />
Global Rank: [88](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [61]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  767.0<br />
<br />
Final Rank Value (767.0) = Starting Rank Value (760.1) + Head To Head Adjustments (6.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.363[<sup>1</sup>](#table2)
- Bounty Collected: 0.242[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.089[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 760.1
- 400 + ( ( 0.174 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 760.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      557 | 2025-02-05 | SAW                        | L   | 0.790      | -            | -                | -                | -         |    -1.96 | Angelka, D7, juliano, kyossa, vicu |
|            9 |      564 | 2025-02-05 | 500                        | L   | 0.789      | -            | -                | -                | -         |    -6.63 | Angelka, D7, juliano, kyossa, vicu |
|            8 |      610 | 2025-02-01 | Prototype Blaze            | W   | 0.765      | 0.143        | 0.042 (0.005)    | 0.135 (0.015)    | 0 (0.000) |    13.32 | D7, juliano, kyossa, vicu, wieenN  |
|            7 |     1260 | 2024-11-24 | FURIA Esports Female       | L   | 0.303      | -            | -                | -                | -         |    -2.85 | Angelka, ASTRA, D7, Hanka, vicu    |
|            6 |     1281 | 2024-11-23 | Fluxo Demons               | W   | 0.298      | 0.524        | 0.012 (0.002)    | 0.051 (0.008)    | 1 (0.298) |     4.27 | Angelka, ASTRA, D7, Hanka, vicu    |
|            5 |     1291 | 2024-11-23 | FlyQuest RED               | W   | 0.296      | 0.524        | 0.005 (0.001)    | 0.005 (0.001)    | 1 (0.296) |     3.01 | Angelka, ASTRA, D7, Hanka, vicu    |
|            4 |     1321 | 2024-11-22 | Imperial Female            | L   | 0.289      | -            | -                | -                | -         |    -2.22 | Angelka, ASTRA, D7, Hanka, vicu    |
|            3 |     1845 | 2024-10-20 | Let Her Cook               | W   | 0.071      | 0.328        | 0.001 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.68 | Angelka, ASTRA, D7, Hanka, vicu    |
|            2 |     1861 | 2024-10-19 | K27 Female                 | L   | 0.065      | -            | -                | -                | -         |    -1.31 | Angelka, ASTRA, D7, Hanka, vicu    |
|            1 |     1882 | 2024-10-18 | Team Denmark (Female team) | W   | 0.058      | 0.328        | 0.006 (0.000)    | 0.036 (0.001)    | 0 (0.000) |     0.52 | Angelka, ASTRA, D7, Hanka, vicu    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,955.97)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.304 | $13,000.00     | $3,955.97       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
